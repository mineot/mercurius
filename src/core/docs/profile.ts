import { detectLanguage } from '@src/core/i18n';

export interface Profile {
  name: string;
  photo: string;
  summary: string;
}

export async function fetchProfile(): Promise<Profile> {
  return new Promise((resolve, reject) => {
    const lang = detectLanguage();

    fetch(`/docs/profile.json`)
      .catch(reject)
      .then(async (response: any) => {
        const profile = await response.json();
        resolve(profile[lang]);
      });
  });
}
