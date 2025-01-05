export class Tags {
  public static readonly COMMA: string = ",";
  public static readonly COPY: string = "&copy;";
  public static readonly DOT: string = ".";
  public static readonly SPACE: string = "&nbsp;";

  public static span(text: string): HTMLElement {
    const element: HTMLElement = document.createElement("span");
    element.innerHTML = text;
    return element;
  }

  public static paragraph(contents: string | HTMLElement[]): HTMLElement {
    const element: HTMLElement = document.createElement("p");
    if (typeof contents === "string") {
      element.innerHTML = contents;
    } else {
      for (const content of contents) {
        element.append(content);
      }
    }
    return element;
  }
}
