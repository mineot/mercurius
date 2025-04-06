export function toogleSidebar() {
  const sidebar = document.querySelector('.app-sidebar');
  (window as any).glass();
  sidebar?.classList.toggle('show');
}
