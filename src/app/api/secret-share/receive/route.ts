import { ObjectId } from 'bson';
import { MongoClient, ServerApiVersion } from 'mongodb';

import { decrypt } from '@helpers/encryption';
import {
  ReceiveSecretRequestBody,
  SecretShareEncryptedData
} from '@interfaces/secretShare';

const mongoConnectionString = process.env.MONGO_CONNECTION_STRING;

export async function POST(request: Request) {
  let message = null;

  const body: ReceiveSecretRequestBody = await request.json();
  const response = await get(body.id);

  if (response) {
    message = decrypt(response, body.key);
  }

  return new Response(JSON.stringify({ message: message }), {
    headers: { 'Content-Type': 'application/json' }
  });
}

async function get(id: string) {
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

  return await collection.findOne<SecretShareEncryptedData>({
    _id: new ObjectId(id)
  });
}
