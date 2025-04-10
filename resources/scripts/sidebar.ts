export default function toogleSidebar() {
  const aside = document.querySelector('.layout > aside');
  const glass = document.querySelector('.layout > div.glass');
  glass?.classList.toggle('show');
  aside?.classList.toggle('show');
}
