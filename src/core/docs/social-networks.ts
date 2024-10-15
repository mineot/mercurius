import { fetchDoc } from './fetch-doc';

export interface SocialNetwork {
  icon?: string[];
  url?: string;
  title: string;
  link: string;
}

export type SocialNetworks = SocialNetwork[];

export const fetchSocialNetworks = async (): Promise<SocialNetworks> =>
  fetchDoc<SocialNetworks>('social-networks');
