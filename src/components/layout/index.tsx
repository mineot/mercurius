import { Header } from './header';

type LayoutProps = {
  children?: React.ReactNode;
};

export function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      <main className="l-main">
        <section>{props.children}</section>
        <footer>Footer</footer>
      </main>
    </>
  );
}
