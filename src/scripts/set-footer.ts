import { Anchor } from "@/scripts/components/anchor";
import { i18n } from "i18next";

export async function setFooter(i18next: i18n, process: any) {
  const copyright: HTMLElement = document.createElement("p");
  copyright.classList.add("copyright");
  copyright.innerHTML = `&copy; ${process.env.COPYRIGHT_NAME}, ${
    process.env.COPYRIGHT_YEAR
  }. ${i18next.t("all_rights_reserved")}.`;

  const contact: HTMLElement = Anchor.info({
    i18next,
    i18Key: "contact",
    href: process.env.APP_CONTACT,
    icon: "contact",
  });

  const p: HTMLElement = document.createElement("p");
  p.append(contact);

  const footer: Element | null = document.body.querySelector("footer");
  footer?.append(copyright);
  footer?.append(p);
}
