import { Header } from './header';

export function Layout() {
  return (
    <>
      <Header />
      <main>
        <section id="content">Main</section>
        <footer>Footer</footer>
      </main>
    </>
  );
}
