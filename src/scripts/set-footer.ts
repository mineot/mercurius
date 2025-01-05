import { Anchors } from "@/scripts/components/anchors";
import { i18n } from "i18next";
import { Tags } from "@/scripts/components/tags";

export async function setFooter(i18next: i18n, process: any) {
  const copyright: HTMLElement = Tags.paragraph(
    `${Tags.COPY} ${process.env.COPYRIGHT_NAME}, ${
      process.env.COPYRIGHT_YEAR
    }. ${i18next.t("all_rights_reserved")}.`
  );

  const p: HTMLElement = Tags.paragraph([
    Anchors.info({
      i18next,
      i18Key: "contact",
      href: process.env.APP_CONTACT,
      icon: "contact",
    }),
  ]);

  copyright.classList.add("copyright");

  const footer: Element | null = document.body.querySelector("footer");
  footer?.append(copyright);
  footer?.append(p);

  // const reserved: Element | null | undefined =
  //   footer?.querySelector("#copyrightReserved");

  // if (reserved) {
  //   reserved.innerHTML = i18next.t("all_rights_reserved");
  // }

  // const footerContactMe: Element | null | undefined =
  //   footer?.querySelector("#footerContactMe");

  // if (footerContactMe) {
  //   footerContactMe.innerHTML = i18next.t("contact");
  // }
}
