import { getDocument } from "@/scripts/get-document";
import { header } from "@/scripts/components/header";
import { i18n } from "i18next";
import { nav } from "@/scripts/components/nav";

interface Args {
  i18next: i18n;
}

export async function homePage({ i18next }: Args) {
  const data = await getDocument("home", i18next);

  header({
    logoUrl: data.header.logo,
    title: data.header.title,
    subtitle: data.header.subtitle,
    summary: data.header.summary,
  });

  nav({
    i18next,
    home: data.nav.home,
    resume: data.nav.resume,
    portfolio: data.nav.portfolio,
    services: data.nav.services,
    products: data.nav.products,
    articles: data.nav.articles,
    blog: data.nav.blog,
  });

  const underconstruction = document.createElement("h3");
  underconstruction.innerHTML = i18next.t("underconstruction");

  const main = document.body.querySelector("main");
  main?.append(underconstruction);
}
