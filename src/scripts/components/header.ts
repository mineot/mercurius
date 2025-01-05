interface Args {
  logoUrl: string;
  title: string;
  subtitle: string;
  summary: string;
}

export async function header(args: Args) {
  const img: HTMLElement = document.createElement("img");
  img.classList.add("border-primary");
  img.setAttribute("src", args.logoUrl);
  img.setAttribute("alt", "App Main Image");

  const figure: HTMLElement = document.createElement("figure");
  figure.append(img);

  const h1: HTMLElement = document.createElement("h1");
  h1.classList.add("text-primary");
  h1.innerHTML = args.title;

  const span: HTMLElement = document.createElement("span");
  span.classList.add("text-secondary");
  span.innerHTML = args.subtitle;

  const p: HTMLElement = document.createElement("p");
  p.classList.add("text-small");
  p.innerHTML = args.summary;

  const section: HTMLElement = document.createElement("section");
  section.append(h1);
  section.append(span);
  section.append(p);

  const header = document.body.querySelector("header");
  header?.append(figure);
  header?.append(section);
}
