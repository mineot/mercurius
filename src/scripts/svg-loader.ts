export async function svgLoader() {
  const spans = document.querySelectorAll("span.icon");

  spans.forEach((span: Element) => {
    fetch(`icons/${span.classList[1]}.svg`)
      .then((response) => response.text())
      .then((svgContent) => {
        span.parentElement?.prepend(svgContent);
        span.remove();
      });
  });
}
