import { Anchor, AnchorArgs } from "@/scripts/components/anchor";
import { i18n } from "i18next";
import { App } from "@/scripts/application";

interface NavArgs {
  i18next: i18n;
  home?: boolean;
  resume?: boolean;
  portfolio?: boolean;
  products?: boolean;
  services?: boolean;
  articles?: boolean;
  blog?: boolean;
}

export async function nav(args: NavArgs) {
  const nav: HTMLElement | null = document.body.querySelector("nav");

  const createAnchor = (aas: AnchorArgs) => {
    const anchor = Anchor.primary(aas);
    nav?.appendChild(anchor);
  };

  if (args.home) {
    createAnchor({
      i18next: args.i18next,
      i18Key: "home",
      icon: "home",
      href: App.instance.href({ page: "home" }),
    });
  }

  if (args.resume) {
    createAnchor({
      i18next: args.i18next,
      i18Key: "resume",
      icon: "resume",
      href: App.instance.href({ page: "resume" }),
    });
  }

  if (args.portfolio) {
    createAnchor({
      i18next: args.i18next,
      i18Key: "portfolio",
      icon: "portfolio",
      href: App.instance.href({ page: "portfolio" }),
    });
  }

  if (args.services) {
    createAnchor({
      i18next: args.i18next,
      i18Key: "services",
      icon: "services",
      href: App.instance.href({ page: "services" }),
    });
  }

  if (args.products) {
    createAnchor({
      i18next: args.i18next,
      i18Key: "products",
      icon: "products",
      href: App.instance.href({ page: "products" }),
    });
  }

  if (args.articles) {
    createAnchor({
      i18next: args.i18next,
      i18Key: "articles",
      icon: "articles",
      href: App.instance.href({ page: "articles" }),
    });
  }

  if (args.blog) {
    createAnchor({
      i18next: args.i18next,
      i18Key: "blog",
      icon: "blog",
      href: App.instance.href({ page: "blog" }),
    });
  }
}
