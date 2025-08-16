export function Layout() {
  return (
    <>
      <header>Header</header>
      <main>
        <section id="content">
          <div>Main</div>
          {Array.from({ length: 100 }).map((_, index) => (
            <div key={index}>
              {Array.from({ length: 30 }).map((_, index) => 'Item ')}: {index}
            </div>
          ))}
        </section>
        <footer>Footer</footer>
      </main>
    </>
  );
}
