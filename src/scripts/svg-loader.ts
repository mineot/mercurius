export async function svgLoader() {
  const containers = document.querySelectorAll("[data-icon]");

  containers.forEach((container: Element) => {
    fetch(`icons/${container.getAttribute("data-icon")}.svg`)
      .then((response) => response.text())
      .then((svgContent) => {
        const dom = new DOMParser().parseFromString(
          svgContent,
          "image/svg+xml"
        );

        const getSvgWidth = (element: Element): string => {
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
        element.setAttribute("width", getSvgWidth(container));

        container.prepend(element);
      });
  });
}
