
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Youtube, Globe, Mail, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ASSETS } from './assets';

// Lazy load route components for code splitting
const Home = lazy(() => import('./Home'));
const Tour = lazy(() => import('./Tour'));
const Discography = lazy(() => import('./Discography'));
const About = lazy(() => import('./About'));

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

const Navbar: React.FC = () => {
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
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-xl py-3 md:py-4 border-b border-amber-400/30 shadow-lg' : 'bg-slate-900/80 backdrop-blur-md py-4 md:py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-sm md:text-xl font-bold tracking-tight font-fredoka text-white uppercase shrink-0">
          {ASSETS.BRAND.LOGO_TEXT_P1} <span className="text-amber-400 font-light">{ASSETS.BRAND.LOGO_TEXT_P2}</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.filter(link => link.desktop).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[12px] uppercase tracking-[0.3em] font-black transition-all hover:text-amber-400 ${isActive(link.path) ? 'text-white underline underline-offset-8 decoration-2 decoration-amber-400' : 'text-white/80'}`}
            >
              {link.name}
            </Link>
          ))}
          <button onClick={toggleLanguage} className="relative group p-2 hover:bg-amber-400/20 rounded-full transition-all flex items-center gap-2 text-[12px] uppercase tracking-widest text-white font-bold">
            <Globe className="w-4 h-4 text-white" />
            {i18n.language.startsWith('de') ? 'EN' : 'DE'}
          </button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="text-white p-2 hover:bg-amber-400/20 rounded-full transition-colors relative"
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
          <div className="absolute right-0 top-0 bottom-0 w-[85%] bg-slate-900 shadow-2xl flex flex-col h-[100dvh] pt-24 px-8 animate-in slide-in-from-right duration-500 overflow-y-auto">
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="absolute top-5 right-6 p-2 text-white hover:text-amber-400 transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="space-y-6">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-400 mb-8 border-b border-amber-400/30 pb-2">{t('nav.menu')}</p>
              
              <div className="flex flex-col gap-5">
                {navLinks.filter(link => link.mobile !== false).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-3xl font-fredoka font-bold transition-all ${isActive(link.path) ? 'text-amber-400 translate-x-2' : 'text-white/80 active:scale-95'}`}
                  >
                    {link.name}
                  </Link>
                ))}
                {/* Checkout removed: purchase actions are handled via contact modal */}
              </div>

              <div className="pt-10 border-t border-amber-400/20 space-y-8">
                <div className="space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-amber-400">{t('nav.settings')}</p>
                  <button 
                    onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }}
                    className="flex items-center gap-4 text-white font-bold hover:text-amber-400 transition-colors py-2 active:scale-95"
                  >
                    <Globe className="w-5 h-5 text-amber-400" />
                    <span className="text-xl uppercase tracking-widest">{t('nav.switchLang')}</span>
                  </button>
                </div>

                <div className="space-y-4 pt-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-amber-400">{t('nav.socials')}</p>
                  <div className="flex gap-10">
                    <a href={ASSETS.LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-2xl shadow-sm border border-amber-400/30 active:scale-90 transition-transform hover:bg-slate-700">
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                    <a href={ASSETS.LINKS.YOUTUBE} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-2xl shadow-sm border border-amber-400/30 active:scale-90 transition-transform hover:bg-slate-700">
                      <Youtube className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto pb-12 pt-12 flex justify-center">
              <p className="text-[9px] font-black uppercase tracking-widest text-white/50">© 2025 Beatrice Egli</p>
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

interface ContactRequest {
  subject: string;
  message: string;
}

const ContactModal: React.FC<{ request: ContactRequest; onClose: () => void }> = ({ request, onClose }) => {
  const { t } = useTranslation();

  const handleEmail = () => {
    const subject = encodeURIComponent(request.subject);
    const body = encodeURIComponent(request.message);
    window.location.href = `mailto:${ASSETS.LINKS.MANAGEMENT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(request.message);
    window.open(`https://wa.me/${ASSETS.LINKS.WHATSAPP_ID}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-sm">
      <div className="w-full max-w-3xl relative bg-slate-900 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden">
        <button onClick={onClose} className="absolute top-4 right-4 sm:top-6 sm:right-6 text-slate-400 hover:text-white transition-colors text-xs sm:text-sm uppercase tracking-[0.35em] font-black">
          {t('common.close', 'Close')}
        </button>
        <div className="px-6 py-8 sm:px-10 sm:py-12 md:px-14 md:py-16">
          <p className="text-amber-400 text-[10px] uppercase tracking-[0.4em] mb-4">{t('checkout.contactManagement')}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight">{request.subject}</h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">{t('checkout.instruction')}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <button onClick={handleEmail} className="w-full bg-white text-slate-900 py-4 rounded-2xl font-black uppercase tracking-[0.35em] text-[11px] hover:bg-amber-400 transition-all flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" /> {t('checkout.contactEmail')}
            </button>
            <button onClick={handleWhatsApp} className="w-full bg-emerald-500 text-white py-4 rounded-2xl font-black uppercase tracking-[0.35em] text-[11px] hover:bg-emerald-600 transition-all flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" /> {t('checkout.contactWhatsApp')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [contactRequest, setContactRequest] = useState<ContactRequest | null>(null);

  const openContactRequest = (subject: string, message: string) => {
    setContactRequest({ subject, message });
  };

  const closeContactRequest = () => {
    setContactRequest(null);
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
        
        <Navbar />
        <main className="flex-grow relative z-10">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tour" element={<Tour onPurchaseRequest={openContactRequest} />} />
              <Route path="/discography" element={<Discography onPurchaseRequest={openContactRequest} />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        {contactRequest && <ContactModal request={contactRequest} onClose={closeContactRequest} />}
      </div>
    </HashRouter>
  );
}

export default App;
