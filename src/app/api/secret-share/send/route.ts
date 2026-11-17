import { randomBytes } from 'crypto';
import { addHours } from 'date-fns';
import { MongoClient, ServerApiVersion } from 'mongodb';

import { localeHeader, localizePath, type Locale } from '@/i18n/config';
import { encrypt } from '@helpers/encryption';
import {
  SecretShareData,
  SecretShareEncryptedData,
  SendSecretRequestBody,
  SendSecretResponseBody
} from '@interfaces/secretShare';

const mongoConnectionString = process.env.MONGO_CONNECTION_STRING;
const sendGridKey = process.env.SENDGRID_KEY;
const host = process.env.NEXT_PUBLIC_HOST;

export async function POST(request: Request) {
  const now = new Date(Date.now());
  const body: SendSecretRequestBody = await request.json();
  const locale = request.headers.get(localeHeader) === 'pl' ? 'pl' : 'en';
  const key = randomBytes(32);

  const encrypted = encrypt(body.message, key);

  const insertId = await create(
    encrypted,
    new Date(addHours(now, body.lifespan))
  );

  const response: SendSecretResponseBody = {
    key: key.toString('hex'),
    id: insertId
  };

  const unlockUrl = new URL(
    localizePath(`/secret-share/receive/${insertId}`, locale),
    host
  );

  const delivery = await sendEmail(body.email, unlockUrl, locale);

  if (!delivery.ok) {
    return Response.json({ error: emailCopy[locale].error }, { status: 502 });
  }

  return new Response(JSON.stringify({ key: response.key }), {
    headers: { 'Content-Type': 'application/json' }
  });
}

async function create(
  data: SecretShareEncryptedData,
  expiresAt: Date
): Promise<string> {
  const client = new MongoClient(mongoConnectionString!, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true
    }
  });

  await client.connect();

  const db = client.db('SecureShare');
  const collection = db.collection('data');

  const record: SecretShareData = {
    expiresAt: expiresAt,
    message: data.message,
    iv: data.iv,
    authTag: data.authTag
  };

  const insResult = await collection.insertOne(record);

  return insResult.insertedId.toString();
}

async function sendEmail(email: string, url: URL, locale: Locale) {
  const copy = emailCopy[locale];
  const body = {
    from: {
      name: 'Infeon Tech',
      email: 'no-reply@endpoint-tech.co.uk'
    },
    personalizations: [{ to: [{ email }] }],
    subject: copy.subject,
    content: [
      {
        type: 'text/plain',
        value: `${copy.intro}\n\n${url.href}\n\n${copy.instructions}`
      }
    ]
  };

  const request = fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${sendGridKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  return await request;
}

const emailCopy = {
  en: {
    subject: 'You’ve received a secret message from Infeon Tech',
    intro:
      'Someone shared a confidential message with you using Infeon Tech. Open this link to read it.',
    instructions: 'Ask the sender for the key to unlock the message.',
    error: 'The secret message could not be delivered.'
  },
  pl: {
    subject: 'Poufna wiadomość od Infeon Tech',
    intro:
      'Otrzymujesz poufną wiadomość udostępnioną za pomocą Infeon Tech. Aby ją odczytać, otwórz poniższy link.',
    instructions: 'Poproś nadawcę o klucz do odczytania wiadomości.',
    error: 'Nie udało się dostarczyć poufnej wiadomości.'
  }
};
