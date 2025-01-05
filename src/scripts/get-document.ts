import { i18n } from "i18next";

export async function getDocument(name: string, i18next: i18n): Promise<any> {
  const response = await fetch(`documents/${name}.${i18next.language}.json`);
  return await response.json();
}
