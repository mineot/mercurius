export async function svgLoader() {
  const containers = document.querySelectorAll("[data-icon]");

  containers.forEach((container: Element) => {
    fetch(`icons/${container.getAttribute("data-icon")}.svg`)
      .then((response) => response.text())
      .then((svgContent) => {
        container.prepend(
          new DOMParser().parseFromString(svgContent, "image/svg+xml")
            .documentElement
        );
      });
  });
}
