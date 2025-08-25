import './main.css';
import './i18n';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import About from '@/pages/about';
import Articles from '@/pages/articles';
import Blog from '@/pages/blog';
import Contact from '@/pages/contact';
import NotFound from '@/pages/notfound';
import Projects from '@/pages/projects';
import Services from '@/pages/services';
import Welcome from '@/pages/welcome';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
