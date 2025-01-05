import { i18n } from "i18next";

export interface AnchorArgs {
  i18next: i18n;
  i18Key: string;
  href: string;
  icon?: string;
}

export class Anchor {
  public static primary(args: AnchorArgs): HTMLElement {
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

  public static info(args: AnchorArgs): HTMLElement {
    const element: HTMLElement = Anchor.primary(args);
    element.classList.add("info");
    return element;
  }
}
