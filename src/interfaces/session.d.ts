export type SessionStatus = 'authorized' | 'unauthorized';

export type Session = {
  accessToken: string;
  refreshToken: string;
  expires: number;
};
