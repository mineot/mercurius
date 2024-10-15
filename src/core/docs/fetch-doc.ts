import { detectLanguage } from '@src/core/i18n';

export async function fetchDoc<T>(target: string): Promise<T> {
  return new Promise((resolve, reject) => {
    const lang = detectLanguage();

    fetch(`/docs/${target}.json`)
      .catch(reject)
      .then(async (response: any) => {
        const res = await response.json();
        resolve(res[lang]);
      });
  });
}
