export const API_PUBLIC_PROFILE = (lang: string) => `api/public/profile/${lang}`;

export interface Profile {
  id?: string;
  name?: string;
  job_title?: string;
  summary?: string;
  description?: string;
  photo?: string;
  image_card?: string;
  language?: string;
}
