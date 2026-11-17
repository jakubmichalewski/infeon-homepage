import { Price } from '@interfaces/price';

export type Order = {
  id: string;
  assessmentTitle: string;
  photoUri: string;
  price: Price;
  status: 'completed' | 'pending';
  createdAt: Date;
};
