import './main.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { MainContent } from './components/main-content/main-content';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <MainContent />
    <Footer />
  </StrictMode>,
);
