import { i18n } from "i18next";

interface Params {
  i18next: i18n;
  i18Key: string;
  href: string;
  icon?: string;
}

export class Anchor {
  private static anchor(args: Params): HTMLElement {
    const element: HTMLElement = document.createElement("a");
    element.classList.add("btn");
    element.setAttribute("href", args.href);

    if (args.icon) {
      element.setAttribute("data-icon", args.icon);
    }

    const content: HTMLElement = document.createElement("span");
    content.innerHTML = args.i18next.t(args.i18Key);
    element.append(content);

    return element;
  }

  public static info(args: Params): HTMLElement {
    const element: HTMLElement = Anchor.anchor(args);
    element.classList.add("info");
    return element;
  }
}
