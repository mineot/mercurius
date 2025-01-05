export async function svgLoader() {
  const containers = document.querySelectorAll("[data-icon]");

  containers.forEach(async (container: Element) => {
    const response = await fetch(
      `icons/${container.getAttribute("data-icon")}.svg`
    );

    const svgContent = await response.text();

    const dom = new DOMParser().parseFromString(svgContent, "image/svg+xml");

    const svgWidth = (): string => {
      const fontSize: string = window.getComputedStyle(container).fontSize;

      // SEE: _variables.scss ($font-small|medium|large)
      switch (fontSize) {
        case "16px":
          return "20";
        case "12px":
          return "15";
        default:
          return "18";
      }
    };

    const element: Element = dom.documentElement;
    element.setAttribute("height", "");
    element.setAttribute("width", svgWidth());

    container.prepend(element);
  });
}
