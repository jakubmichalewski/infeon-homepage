import { ObjectId } from 'bson';

export type SendSecretRequestBody = {
  message: string;
  email: string;
  lifespan: number;
};

export type SendSecretResponseBody = {
  id: string;
  key: string;
};

export type ReceiveSecretRequestBody = {
  id: string;
  key: string;
};

export type ReceiveSecretResponseBody = {
  message: string;
};

export type SecretShareData = {
  id?: ObjectId;
  expiresAt: Date;
  message: string;
  iv: string;
  authTag: string;
};

export type SecretShareEncryptedData = {
  iv: string;
  message: string;
  authTag: string;
};
