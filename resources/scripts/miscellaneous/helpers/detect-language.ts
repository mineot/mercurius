/**
 * Detects the user's preferred language.
 *
 * @returns {string} The language code ("pt" for Portuguese, "en" for English).
 */
export function detectLanguage(): "pt" | "en" {
  const lang: string = navigator.language.toLowerCase();

  switch (lang) {
    case "pt-br":
    case "br":
    case "pt":
      return "pt";
    default:
      return "en";
  }
}
