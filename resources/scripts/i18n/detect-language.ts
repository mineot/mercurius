export function detectLanguage(): string {
  const lang = navigator.language.toLowerCase();

  if (["pt-br", "br", "pt"].includes(lang)) {
    return "pt";
  }

  return "en";
}
