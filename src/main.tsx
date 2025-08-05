import './main.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <header>Header</header>
    <main>Main Content</main>
    <footer>Footer</footer>
  </StrictMode>,
);
