import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { BIO_CONTENT } from './constants';
import { ASSETS } from './assets';

const About: React.FC = () => {
  const { t } = useTranslation();
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.2;
        bgRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Merged Hero & Roots Section */}
      <section className="relative min-h-screen pt-48 md:pt-64 pb-32 md:pb-48 px-6 overflow-hidden border-b border-slate-200">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
           <div ref={bgRef} className="absolute inset-0 w-full h-[120%] -top-[10%] opacity-20 md:opacity-30">
             <img 
              src={ASSETS.STORY.HERO_PARALLAX_BG} 
              alt="Beatrice Egli" 
              className="w-full h-full object-cover scale-110" 
              referrerPolicy="no-referrer"
              loading="lazy"
             />
           </div>
           <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <header className="mb-24 md:mb-40 text-center">
            <motion.p 
              initial={{ opacity: 0, letterSpacing: "2em" }}
              animate={{ opacity: 1, letterSpacing: "1.2em" }}
              transition={{ duration: 1.5 }}
              className="text-amber-500 text-[11px] font-black uppercase mb-8 ml-4"
            >
              {t('about.producer')}
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-6xl md:text-[14rem] font-black text-slate-900 leading-none tracking-tighter uppercase"
            >
              {t('about.title')}
            </motion.h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-40 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative group"
            >
              <div className="aspect-[3/4] bg-slate-100 rounded-[4rem] overflow-hidden shadow-2xl border border-slate-200">
                <img 
                  src={ASSETS.STORY.MAIN_PORTRAIT} 
                  alt="Beatrice Egli Portrait"
                  className="w-full h-full object-cover transition-all duration-[3s] group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
                whileInView={{ opacity: 1, rotate: 2, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-10 -right-4 md:-bottom-16 md:-right-12 glass p-10 md:p-16 shadow-2xl rounded-[3rem] border border-white/20"
              >
                <p className="font-black text-4xl md:text-7xl leading-none tracking-tighter text-slate-900 whitespace-pre-line uppercase">{t('about.since')}</p>
              </motion.div>
            </motion.div>
            
            <div className="space-y-32 md:space-y-48 pt-12 md:pt-32">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-10 md:space-y-16"
              >
                <h2 className="text-4xl md:text-7xl text-slate-900 font-black tracking-tighter uppercase leading-none">{t('about.earlyYearsTitle')}</h2>
                <div className="h-px bg-amber-400 w-24"></div>
                <p className="text-lg md:text-2xl font-medium leading-relaxed md:leading-loose text-slate-500 tracking-tight">
                  {t('about.bio.earlyYears')}
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-10 md:space-y-16"
              >
                <h2 className="text-4xl md:text-7xl text-slate-900 font-black tracking-tighter uppercase leading-none">{t('about.achievementsTitle')}</h2>
                <div className="h-px bg-amber-400 w-24"></div>
                <p className="text-lg md:text-2xl font-medium leading-relaxed md:leading-loose text-slate-500 tracking-tight">
                  {t('about.bio.achievements')}
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-10 md:space-y-16 bg-white p-10 md:p-16 rounded-[4rem] border border-slate-100 shadow-xl shadow-slate-200/50"
              >
                <div className="flex items-center gap-6 text-amber-500 mb-4">
                  <div className="w-16 h-1 bg-amber-500" />
                  <span className="text-[11px] font-black uppercase tracking-[0.6em]">{t('nav.story')}</span>
                </div>
                <h2 className="text-3xl md:text-6xl text-slate-900 font-black tracking-tighter uppercase leading-none">{t('about.labelTitle')}</h2>
                <p className="text-lg md:text-xl font-medium leading-relaxed text-slate-500">
                  {t('about.labelDesc')}
                </p>
                <div className="flex flex-wrap items-center gap-10 pt-4 grayscale opacity-40">
                   <span className="text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">{t('common.partners')}</span>
                   {ASSETS.PARTNERS.map((partner, i) => (
                     <span key={i} className="text-sm font-black text-slate-800 uppercase tracking-widest">{partner.name}</span>
                   ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote & Vision Section */}
      <section className="bg-white py-32 md:py-64 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center space-y-16 md:space-y-24">
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-amber-500 text-[11px] font-black uppercase tracking-[1em]"
           >
             {t('about.visionTitle')}
           </motion.p>
           <motion.h3 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="text-4xl md:text-9xl tracking-tighter leading-[0.9] text-slate-900 font-black uppercase"
           >
             {t('about.visionQuote')}
           </motion.h3>
           <div className="w-24 h-1 bg-slate-900 mx-auto" />
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 text-left max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 md:space-y-10"
              >
                 <h4 className="font-black text-[11px] uppercase tracking-[0.5em] text-slate-400 ">{t('about.philanthropy')}</h4>
                 <p className="text-lg md:text-xl font-medium leading-relaxed text-slate-500">{t('about.bio.philanthropyDescription')}</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 md:space-y-10"
              >
                 <h4 className="font-black text-[11px] uppercase tracking-[0.5em] text-amber-500 ">{t('about.performance')}</h4>
                 <p className="text-lg md:text-xl font-medium leading-relaxed text-slate-500">{t('about.performanceDesc')}</p>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Gallery/Atmosphere Section */}
      <section className="py-24 md:py-64 px-6 bg-slate-50">
         <div className="max-w-7xl mx-auto">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-24 text-center"
            >
             <h2 className="text-5xl md:text-[8rem] font-black text-slate-900 uppercase tracking-tighter mb-4">{t('home.visualJourney').split(' ')[0]}</h2>
             <div className="w-24 h-1 bg-amber-400 mx-auto" />
           </motion.div>
           
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {ASSETS.STORY.GALLERY.map((url, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className={`aspect-square bg-slate-100 overflow-hidden border border-slate-100 rounded-[2rem] md:rounded-[3rem] group shadow-lg shadow-slate-200/50`}
                >
                   <img 
                    src={url} 
                    className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out" 
                    alt={`Atmosphere ${i+1}`} 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                   />
                </motion.div>
              ))}
           </div>
         </div>
      </section>
    </div>
  );
};

export default About;
