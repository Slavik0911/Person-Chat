import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Import pages
import Home from './pages/App.jsx';
import History from './pages/History.jsx';
import Chat from './pages/Chat.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="history" element={<History />} />
        <Route path="chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
