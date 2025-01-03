import { i18n } from "i18next";

export async function setFooter(i18next: i18n) {
  const footer: Element | null = document.body.querySelector("footer");

  const reserved: Element | null | undefined =
    footer?.querySelector("#copyrightReserved");

  if (reserved) {
    reserved.innerHTML = i18next.t("all_rights_reserved");
  }

  const footerContactMe: Element | null | undefined =
    footer?.querySelector("#footerContactMe");

  if (footerContactMe) {
    footerContactMe.innerHTML = i18next.t("contact");
  }
}
