import { i18n } from "i18next";
import { Tags } from "@/scripts/components/tags";

interface Params {
  i18next: i18n;
  i18Key: string;
  href: string;
  icon?: string;
}

export class Anchors {
  public static info(args: Params): HTMLElement {
    const element: HTMLElement = document.createElement("a");
    element.classList.add("btn");
    element.classList.add("info");
    element.setAttribute("href", args.href);
    if (args.icon) {
      element.setAttribute("data-icon", args.icon);
    }
    element.append(Tags.span(args.i18next.t(args.i18Key)));
    return element;
  }
}
