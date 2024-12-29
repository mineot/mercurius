export default async function home() {
  const document = await fetch("./documents/home.json");
  console.log(document);

  //   const home = document.querySelector("div.home");

  //   const photo = home?.querySelector("img[id=photo]");
  //   if (photo) {
  //     photo.setAttribute("src", "https://placehold.co/280");
  //   }

  //   console.log(photo);
}
