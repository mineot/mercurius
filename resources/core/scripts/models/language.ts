import { Profile } from './profile';

export interface Language {
  id?: string;
  name: string;
  language: string;
  country?: string;
  profiles?: Profile[];
}
