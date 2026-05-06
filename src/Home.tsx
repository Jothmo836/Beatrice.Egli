import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Music, Calendar, Award, Mic2, Layers, Play, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { TOUR_DATES } from './constants';
import { ASSETS } from './assets';
import { LazyImage } from './LazyImage';

const Home: React.FC = () => {
  const craftBgRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (craftBgRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.15;
        craftBgRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-amber-50 min-h-screen overflow-x-hidden">
      {/* Immersive Cinematic Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            src={ASSETS.HOME.HERO_BG} 
            alt="Beatrice Egli Hero Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-amber-50" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full pt-32 pb-48 flex flex-col items-center text-center">
        </div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex flex-wrap justify-center gap-6 w-full px-6"
        >
          <Link to="/tour" className="bg-amber-400 text-white px-16 py-7 rounded-full text-[14px] font-black uppercase tracking-[0.3em] hover:bg-slate-900 transition-all hover:scale-105 shadow-[0_20px_60px_rgba(251,191,36,0.3)]">
            {t('home.dates')}
          </Link>
          <Link to="/about" className="border-2 border-white/40 bg-white/10 text-white px-16 py-7 rounded-full text-[14px] font-black uppercase tracking-[0.3em] hover:bg-white/20 transition-all backdrop-blur-xl">
            {t('home.about')}
          </Link>
        </motion.div>
      </section>

      {/* NEW: Portrait Feature Section */}
      <section className="py-24 md:py-48 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
            {/* Image First on Mobile */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-7 relative order-first lg:order-last"
            >
              <div className="relative z-10 rounded-[3rem] md:rounded-[6rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)]">
                <img 
                  src={ASSETS.STORY.MAIN_PORTRAIT} 
                  alt="Beatrice Egli Performance" 
                  className="w-full h-full object-cover aspect-[4/5] md:aspect-square lg:aspect-auto lg:h-[700px] hover:scale-105 transition-transform duration-[3s]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 md:-top-12 md:-right-12 w-32 h-32 md:w-48 md:h-48 border border-amber-200 rounded-full border-dashed z-0 opacity-50"
              />
              <div className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 w-48 h-48 md:w-80 md:h-80 bg-orange-100 rounded-full blur-[60px] md:blur-[100px] opacity-40 z-0"></div>
            </motion.div>

            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-10"
            >
              <div className="space-y-4">
                <span className="text-amber-500 text-[11px] font-black uppercase tracking-[0.5em]">{t('home.latestUpdate')}</span>
                <h2 className="text-5xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter leading-[0.85]">
                  {t('common.pure')} <br/> <span className="text-amber-500">{t('common.energy')}</span>
                </h2>
              </div>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium max-w-md">
                {t('about.performanceDesc')}
              </p>
              <div className="pt-4">
                <Link to="/about" className="group inline-flex items-center gap-6 text-[12px] font-black uppercase tracking-widest text-slate-900 overflow-hidden relative">
                  <span className="relative z-10">{t('common.discoverStory')}</span>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 group-hover:h-full transition-all duration-300 opacity-20 -z-0"></div>
                  <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform text-amber-500" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Craft Section */}
      <section className="relative py-24 md:py-64 px-6 border-y border-orange-100 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 md:opacity-20 overflow-hidden">
          <div ref={craftBgRef} className="absolute inset-0 w-full h-[150%] -top-[25%]">
            <img 
              src={ASSETS.HOME.CRAFT_SECTION_BG} 
              alt="Music Studio" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-40 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10 md:space-y-16"
            >
              <p className="text-amber-500 text-[11px] md:text-[12px] font-black uppercase tracking-[0.8em]">{t('home.musicality')}</p>
              <h2 className="text-4xl md:text-8xl font-black text-slate-900 leading-[0.9] whitespace-pre-line tracking-tighter">{t('home.musicalityTitle')}</h2>
              <p className="text-slate-500 text-lg md:text-2xl leading-relaxed font-medium">
                {t('home.description')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16 pt-8">
                <div className="space-y-4 group">
                   <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-white transition-colors duration-500">
                     <Award size={24} />
                   </div>
                   <h4 className="text-slate-900 font-black text-xl tracking-tight">{t('home.awardTitle')}</h4>
                   <p className="text-slate-500 text-sm leading-relaxed">{t('home.awardDesc')}</p>
                </div>
                <div className="space-y-4 group">
                   <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-white transition-colors duration-500">
                     <Layers size={24} />
                   </div>
                   <h4 className="text-slate-900 font-black text-xl tracking-tight">{t('home.techTitle')}</h4>
                   <p className="text-slate-500 text-sm leading-relaxed">{t('home.techDesc')}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-white p-10 md:p-20 rounded-[3rem] md:rounded-[5rem] shadow-[0_100px_150px_rgba(0,0,0,0.05)] border border-slate-100 space-y-10 md:space-y-16 relative group"
            >
               <div className="absolute top-0 right-0 p-12 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity">
                  <Mic2 size={120} className="text-amber-500 transform translate-x-1/2 -translate-y-1/2 rotate-12" />
               </div>
               
               <div className="flex items-center gap-6 md:gap-8 border-b border-slate-100 pb-10 md:pb-16 relative z-10">
                  <div className="w-16 h-16 rounded-3xl bg-amber-400 flex items-center justify-center text-white shadow-xl shadow-amber-400/20">
                    <Mic2 size={32} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter uppercase">{t('home.latestUpdate')}</h3>
               </div>
               <div className="space-y-8 relative z-10">
                 <p className="text-slate-600 text-lg md:text-2xl leading-relaxed font-medium">
                   {t('home.updateText')}
                 </p>
                 <Link to="/about" className="group inline-flex items-center gap-6 text-[12px] font-black uppercase tracking-[0.3em] text-amber-500">
                   <span className="border-b-2 border-transparent group-hover:border-amber-400 transition-all">{t('home.readBio')}</span>
                   <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform" />
                 </Link>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-24 md:py-64 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10 group"
          >
            <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-amber-400 group-hover:text-white transition-all duration-700">
              <Music size={32} />
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase">{t('home.music')}</h3>
            <p className="text-slate-500 text-lg leading-relaxed font-medium max-w-md">{t('home.musicDesc')}</p>
            <Link to="/discography" className="group inline-flex items-center gap-4 text-[12px] font-black uppercase tracking-[0.2em] text-amber-500">
              <span className="relative">
                {t('home.explore')}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></div>
              </span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10 group"
          >
            <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-amber-400 group-hover:text-white transition-all duration-700">
              <Calendar size={32} />
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase">{t('home.tour')}</h3>
            <p className="text-slate-500 text-lg leading-relaxed font-medium max-w-md">{t('home.tourDesc')}</p>
            <Link to="/tour" className="group inline-flex items-center gap-4 text-[12px] font-black uppercase tracking-[0.2em] text-amber-500">
              <span className="relative">
                {t('home.dates')}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></div>
              </span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Visual Gallery Spotlight */}
      <section className="py-24 md:py-64 px-6 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400/0 via-amber-400/50 to-amber-400/0"></div>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24 md:mb-40"
          >
            <div className="space-y-8">
              <span className="text-amber-400 text-[10px] md:text-[11px] font-black uppercase tracking-[0.8em] block">{t('home.visualJourney')}</span>
              <h2 className="text-6xl md:text-[10rem] font-black text-white uppercase tracking-tighter leading-[0.8]">
                {t('home.stagesOfEmotion').split(' ')[0]} <br/> <span className="text-amber-400">{t('home.stagesOfEmotion').split(' ').slice(1).join(' ')}</span>
              </h2>
            </div>
            <Link to="/about" className="group bg-white/5 hover:bg-amber-400 text-white hover:text-slate-900 px-12 py-6 rounded-full text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500 border border-white/10 hover:border-amber-400 backdrop-blur-xl flex items-center gap-4">
               {t('home.viewAllStory')} <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
             {ASSETS.STORY.GALLERY.map((img, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                  className="relative group overflow-hidden rounded-[3rem]"
                >
                   <div className={`aspect-[4/5] overflow-hidden`}>
                      <img 
                        src={img} 
                        alt={`Gallery ${idx}`} 
                        className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                   </div>
                   <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-slate-900 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] opacity-60">SPOTLIGHT 0{idx + 1}</p>
                   </div>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Tickets & Bookings List Preview */}
      <section className="relative py-24 md:py-64 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-24 md:mb-40"
          >
            <div className="space-y-4">
              <span className="text-amber-500 text-[11px] font-black uppercase tracking-[0.4em] block">LATEST DATES</span>
              <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-none">{t('home.upcomingShows')}</h2>
            </div>
            <Link to="/tour" className="group flex items-center gap-6 text-[12px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-slate-900 transition-colors">
              {t('home.viewFullTour')}
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-amber-400 group-hover:border-amber-400 group-hover:text-white transition-all">
                <ArrowRight size={20} />
              </div>
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
            {TOUR_DATES
              .filter(d => d.status === 'upcoming')
              .sort((a, b) => a.timestamp - b.timestamp)
              .slice(0, 6)
              .map((date, idx) => (
              <motion.div 
                key={date.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className={`group flex flex-col justify-between py-10 md:py-16 border-b border-slate-100 hover:bg-slate-50 transition-colors duration-500 px-6 -mx-6 rounded-[2rem] md:rounded-[3rem] gap-10`}
              >
                <div className="w-full">
                  <div className="flex justify-between items-center mb-6">
                    <div className="px-4 py-1.5 bg-amber-50 rounded-full">
                      <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest">{date.date}</p>
                    </div>
                    {date.id === 't-2026-sp' && (
                      <span className="bg-slate-900 text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">{t('common.newShow')}</span>
                    )}
                  </div>
                  <h4 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 group-hover:text-amber-500 transition-colors uppercase tracking-tight leading-tight">{date.venue}</h4>
                  <p className="text-[11px] text-slate-400 uppercase tracking-[0.3em] font-black">{date.location} / {date.country}</p>
                </div>
                <div className="w-full">
                  <Link to="/tour" className="flex items-center justify-between text-[11px] font-black uppercase tracking-[0.5em] text-slate-900 bg-white border border-slate-200 p-8 rounded-2xl group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 shadow-sm transition-all duration-500">
                    {t('home.tickets')} <ArrowRight size={20} className="text-amber-500" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
