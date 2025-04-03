export function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  (window as any).backdropGlass();
  sidebar?.classList.toggle('show');
}
