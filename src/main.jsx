import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import Overview from './Overview.jsx';
import SearchMovie from './components/SearchMovie'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/searchMovie" element={<SearchMovie />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
