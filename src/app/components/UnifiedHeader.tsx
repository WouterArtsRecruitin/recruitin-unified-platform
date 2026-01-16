import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Newspaper, Briefcase, User } from 'lucide-react';
import { useState } from 'react';

export function UnifiedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isNewsPage = location.pathname === '/news';
  const isExecutivePage = location.pathname === '/';
  const isAboutPage = location.pathname === '/about';

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-[1200px] mx-auto px-5 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-gray-700 to-gray-800 px-4 py-2 rounded">
            <span className="text-white font-semibold text-[18px] tracking-wide">RECRUITIN</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className={`flex items-center gap-2 text-[14px] font-medium transition-colors ${
              isExecutivePage 
                ? 'text-orange-600 border-b-2 border-orange-600 pb-1' 
                : 'text-gray-700 hover:text-orange-600'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Executive Recruitment</span>
          </Link>
          <Link 
            to="/news" 
            className={`flex items-center gap-2 text-[14px] font-medium transition-colors ${
              isNewsPage 
                ? 'text-orange-600 border-b-2 border-orange-600 pb-1' 
                : 'text-gray-700 hover:text-orange-600'
            }`}
          >
            <Newspaper className="w-4 h-4" />
            <span>Recruitment Nieuws</span>
          </Link>
          <Link 
            to="/about" 
            className={`flex items-center gap-2 text-[14px] font-medium transition-colors ${
              isAboutPage 
                ? 'text-orange-600 border-b-2 border-orange-600 pb-1' 
                : 'text-gray-700 hover:text-orange-600'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Over Frank</span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col py-4">
            <Link 
              to="/" 
              className={`flex items-center gap-3 px-5 py-3 text-[14px] font-medium transition-colors ${
                isExecutivePage 
                  ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-600' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Briefcase className="w-4 h-4" />
              <span>Executive Recruitment</span>
            </Link>
            <Link 
              to="/news" 
              className={`flex items-center gap-3 px-5 py-3 text-[14px] font-medium transition-colors ${
                isNewsPage 
                  ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-600' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Newspaper className="w-4 h-4" />
              <span>Recruitment Nieuws</span>
            </Link>
            <Link 
              to="/about" 
              className={`flex items-center gap-3 px-5 py-3 text-[14px] font-medium transition-colors ${
                isAboutPage 
                  ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-600' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <User className="w-4 h-4" />
              <span>Over Frank</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}