import {
  CipherGCMTypes,
  createCipheriv,
  createDecipheriv,
  randomBytes
} from 'crypto';

import { SecretShareEncryptedData } from '@interfaces/secretShare';

export function encrypt(text: string, key: Buffer): SecretShareEncryptedData {
  let encrypted: string;

  const iv = randomBytes(12);
  const cipher = createCipheriv('aes-256-gcm' as CipherGCMTypes, key, iv);

  encrypted = cipher.update(text, 'utf-8', 'hex');
  encrypted += cipher.final('hex');

  const authTag = cipher.getAuthTag();

  return {
    iv: iv.toString('hex'),
    message: encrypted,
    authTag: authTag.toString('hex')
  };
}

export function decrypt(
  encrypted: SecretShareEncryptedData,
  key: string
): string {
  let decrypted: string;

  const iv = Buffer.from(encrypted.iv, 'hex');
  const authTag = Buffer.from(encrypted.authTag, 'hex');
  const cypherKey = Buffer.from(key, 'hex');
  const decipher = createDecipheriv(
    'aes-256-gcm' as CipherGCMTypes,
    cypherKey,
    iv
  );

  decipher.setAuthTag(authTag);

  decrypted = decipher.update(encrypted.message, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}
