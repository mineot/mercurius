import { Header } from './header';
import { Footer } from './footer';

type LayoutProps = {
  children?: React.ReactNode;
};

export function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      <main className="l-main">
        <section>{props.children}</section>
        <Footer />
      </main>
    </>
  );
}
