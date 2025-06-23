import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Імпортуємо сторінки
import Home from './pages/App.jsx';
import History from './pages/History.jsx';
import Chat from './pages/Chat.jsx';
// Можеш додати загальний layout тут, якщо треба

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      {/* Роутинг */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="history" element={<History />} />
        <Route path="chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
