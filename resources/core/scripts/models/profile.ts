import { Language } from './language';

export interface Profile {
  id?: string;
  language?: Language;
  name: string;
  avatar: string;
  summary: string;
}
