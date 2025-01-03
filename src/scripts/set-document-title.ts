export async function setDocumentTitle(process: any) {
  document.title = process.env.APP_NAME ?? "Mercurius";
}
