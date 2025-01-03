export function setCopyright(process: any) {
  const copyrightYear: Element | null =
    document.querySelector("#copyrightYear");

  const copyrightName: Element | null =
    document.querySelector("#copyrightName");

  const copyrightContact: Element | null =
    document.querySelector("#copyrightContact");

  if (copyrightYear) {
    copyrightYear.innerHTML =
      process.env.COPYRIGHT_YEAR ?? new Date().getFullYear().toString();
  }

  if (copyrightName) {
    copyrightName.innerHTML = process.env.COPYRIGHT_NAME ?? "Mercurius";
  }

  if (copyrightContact) {
    copyrightContact.setAttribute("href", process.env.APP_CONTACT ?? "#");
  }
}
