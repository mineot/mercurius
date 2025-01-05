import { header } from "@/scripts/components/header";
import { i18n } from "i18next";

interface Args {
  i18next: i18n;
}

export async function homePage({ i18next }: Args) {
  header({
    logoUrl: i18next.t("home:header.logo"),
    title: i18next.t("home:header.title"),
    subtitle: i18next.t("home:header.subtitle"),
    summary: i18next.t("home:header.summary"),
  });
}
