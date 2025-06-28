import './styles/main.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import { Welcome } from '@page/Welcome.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        {/* <Route path="/sobre" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
