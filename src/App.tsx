
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Instagram, Youtube, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ASSETS } from './assets';
import { CartItem } from './types';

// Lazy load route components for code splitting
const Home = lazy(() => import('./Home'));
const Tour = lazy(() => import('./Tour'));
const Discography = lazy(() => import('./Discography'));
const About = lazy(() => import('./About'));
const Checkout = lazy(() => import('./Checkout'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400" />
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar: React.FC<{ cartCount: number }> = ({ cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language.startsWith('de') ? 'en' : 'de');
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen || isLangMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, isLangMenuOpen]);

  const navLinks = [
    { name: t('nav.home'), path: '/', desktop: false, mobile: false },
    { name: t('nav.tour'), path: '/tour', desktop: true, mobile: true },
    { name: t('nav.music'), path: '/discography', desktop: true, mobile: true },
    { name: t('nav.story'), path: '/about', desktop: true, mobile: true },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${isScrolled ? 'bg-amber-50/95 backdrop-blur-xl py-3 md:py-4 border-b border-orange-200 shadow-sm' : 'bg-transparent py-4 md:py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-sm md:text-xl font-bold tracking-tight font-fredoka text-slate-800 uppercase shrink-0">
          {ASSETS.BRAND.LOGO_TEXT_P1} <span className="text-slate-500 font-light">{ASSETS.BRAND.LOGO_TEXT_P2}</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.filter(link => link.desktop).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[12px] uppercase tracking-[0.3em] font-black transition-all hover:text-amber-600 ${isActive(link.path) ? 'text-slate-900 underline underline-offset-8 decoration-2 decoration-amber-400' : 'text-slate-900/80'}`}
            >
              {link.name}
            </Link>
          ))}
          <button onClick={toggleLanguage} className="relative group p-2 hover:bg-orange-100 rounded-full transition-all flex items-center gap-2 text-[12px] uppercase tracking-widest text-slate-900 font-bold">
            <Globe className="w-4 h-4 text-slate-900" />
            {i18n.language.startsWith('de') ? 'EN' : 'DE'}
          </button>
          <Link to="/checkout" className="relative group p-2 hover:bg-orange-100 rounded-full transition-all">
            <ShoppingCart className="w-4 h-4 text-slate-900 hover:text-slate-950" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-[11px] font-black rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="text-slate-900 p-2 hover:bg-orange-100 rounded-full transition-colors relative"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[1100]">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute right-0 top-0 bottom-0 w-[85%] bg-amber-50 shadow-2xl flex flex-col h-[100dvh] pt-24 px-8 animate-in slide-in-from-right duration-500 overflow-y-auto">
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="absolute top-5 right-6 p-2 text-slate-500 hover:text-slate-800 transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="space-y-6">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-400 mb-8 border-b border-orange-200/30 pb-2">{t('nav.menu')}</p>
              
              <div className="flex flex-col gap-5">
                {navLinks.filter(link => link.mobile !== false).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-3xl font-fredoka font-bold transition-all ${isActive(link.path) ? 'text-amber-600 translate-x-2' : 'text-slate-800 active:scale-95'}`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/checkout"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-3xl font-fredoka font-bold transition-all relative flex items-center gap-4 ${isActive('/checkout') ? 'text-amber-600 translate-x-2' : 'text-slate-800 active:scale-95'}`}
                >
                  {t('nav.checkout')}
                  {cartCount > 0 && (
                    <span className="bg-amber-500 text-white text-xs font-black px-3 py-1 rounded-full">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </div>

              <div className="pt-10 border-t border-orange-200/50 space-y-8">
                <div className="space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-orange-400">{t('nav.settings')}</p>
                  <button 
                    onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }}
                    className="flex items-center gap-4 text-slate-700 font-bold hover:text-amber-600 transition-colors py-2 active:scale-95"
                  >
                    <Globe className="w-5 h-5 text-amber-500" />
                    <span className="text-xl uppercase tracking-widest">{t('nav.switchLang')}</span>
                  </button>
                </div>

                <div className="space-y-4 pt-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-orange-400">{t('nav.socials')}</p>
                  <div className="flex gap-10">
                    <a href={ASSETS.LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-2xl shadow-sm border border-orange-100 active:scale-90 transition-transform">
                      <Instagram className="w-6 h-6 text-slate-600" />
                    </a>
                    <a href={ASSETS.LINKS.YOUTUBE} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-2xl shadow-sm border border-orange-100 active:scale-90 transition-transform">
                      <Youtube className="w-6 h-6 text-slate-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto pb-12 pt-12 flex justify-center">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">© 2025 Beatrice Egli</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
  <footer className="bg-orange-100 py-12 md:py-24 px-6 border-t border-orange-200">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 items-start">
      <div className="space-y-4">
        <h2 className="font-fredoka text-xl md:text-3xl font-bold text-slate-800 tracking-tighter uppercase">{ASSETS.BRAND.NAME}</h2>
        <p className="text-slate-500 text-sm leading-relaxed max-w-xs ">
          {t('footer.description')}
        </p>
        <div className="flex gap-6 pt-4">
          <a href={ASSETS.LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 text-orange-500 hover:text-slate-800 transition-colors cursor-pointer" />
          </a>
          <a href={ASSETS.LINKS.YOUTUBE} target="_blank" rel="noopener noreferrer">
            <Youtube className="w-5 h-5 text-orange-500 hover:text-slate-800 transition-colors cursor-pointer" />
          </a>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-12">
        <div className="flex flex-col gap-3">
          <p className="text-[12px] font-black uppercase tracking-widest text-orange-500 mb-4">{t('footer.explore')}</p>
          <Link to="/" className="text-sm text-slate-500 hover:text-slate-800 transition-colors ">{t('nav.home')}</Link>
          <Link to="/tour" className="text-sm text-slate-500 hover:text-slate-800 transition-colors ">{t('nav.tour')}</Link>
          <Link to="/discography" className="text-sm text-slate-500 hover:text-slate-800 transition-colors ">{t('nav.music')}</Link>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-[12px] font-black uppercase tracking-widest text-orange-500 mb-4">{t('footer.connect')}</p>
          <Link to="/about" className="text-sm text-slate-500 hover:text-slate-800 transition-colors ">{t('nav.story')}</Link>
          <Link to="/checkout" className="text-sm text-slate-500 hover:text-slate-800 transition-colors ">{t('nav.checkout')}</Link>
        </div>
      </div>

      <div className="flex flex-col md:items-end gap-6 pt-2">
        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-orange-400 ">{ASSETS.BRAND.FOOTER_COPY}</p>
        <div className="flex gap-8 text-[11px] font-black uppercase tracking-widest text-orange-500 ">
          <a href="#" className="hover:text-slate-800">{t('footer.privacy')}</a>
          <a href="#" className="hover:text-slate-800">{t('footer.terms')}</a>
        </div>
      </div>
    </div>
  </footer>
  );
};

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) => prev.map((item) => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-amber-400 selection:text-white relative bg-amber-50/30">
        {/* Global background accents */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-200/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-200/20 blur-[150px] rounded-full" />
        </div>
        
        <Navbar cartCount={cart.reduce((acc, i) => acc + i.quantity, 0)} />
        <main className="flex-grow relative z-10">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tour" element={<Tour onAddToCart={addToCart} />} />
              <Route path="/discography" element={<Discography onAddToCart={addToCart} />} />
              <Route path="/about" element={<About />} />
              <Route path="/checkout" element={<Checkout cart={cart} onRemove={removeFromCart} onUpdate={updateQuantity} />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
