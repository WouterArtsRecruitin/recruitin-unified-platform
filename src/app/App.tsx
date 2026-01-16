import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsPage from '@/app/pages/NewsPage';
import ExecutivePage from '@/app/pages/ExecutivePage';
import AboutPage from '@/app/pages/AboutPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExecutivePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}