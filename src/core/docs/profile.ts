import { fetchDoc } from './fetch-doc';

export interface Profile {
  name: string;
  photo: string;
  summary: string;
}

export const fetchProfile = async (): Promise<Profile> => fetchDoc('profile');
