import { SignInData } from 'auth/types/auth';

export interface SignInResponse extends GlobalResponse {
  data: SignInData;
}
