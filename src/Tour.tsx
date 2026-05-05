import React, { useState } from 'react';
import { MapPin, Star, CheckCircle2, Sparkles, Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { TOUR_DATES, VIP_PACKAGES } from './constants';
import { CartItem } from './types';
import { ASSETS } from './assets';

interface TourProps {
  onAddToCart: (item: CartItem) => void;
}

const Tour: React.FC<TourProps> = ({ onAddToCart }) => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<'upcoming' | 'past'>('upcoming');
  const [showAll, setShowAll] = useState(false);

  const filteredDates = TOUR_DATES
    .filter(d => d.status === filter)
    .sort((a, b) => a.timestamp - b.timestamp);

  const displayDates = showAll ? filteredDates : filteredDates.slice(0, 6);

  const handleTicketClick = (date: typeof TOUR_DATES[0]) => {
    onAddToCart({
      id: `ticket-${date.id}`,
      name: `${t('tour.tickets')}: ${date.venue}`,
      price: 89.99,
      type: 'ticket',
      quantity: 1,
      imageUrl: ASSETS.PLACEHOLDERS.TICKET_THUMB
    });
  };

  const handleVIPClick = (pkg: typeof VIP_PACKAGES[0]) => {
    onAddToCart({
      id: `vip-${pkg.id}`,
      name: `${t('tour.vip').split(' ')[0]}: ${pkg.name}`,
      price: pkg.price,
      type: 'vip',
      quantity: 1,
      imageUrl: ASSETS.PLACEHOLDERS.VIP_THUMB
    });
  };

  return (
    <div className="pt-32 md:pt-48 pb-32 md:pb-64 px-6 bg-slate-900 min-h-screen relative overflow-hidden">
      {/* Immersive Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img src={ASSETS.HOME.TOUR_PREVIEW_BG} className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/4 -right-1/4 w-[60%] h-[60%] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[60%] h-[60%] bg-orange-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="text-center mb-24 md:mb-48">
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-amber-400 text-[11px] md:text-[12px] font-black uppercase tracking-[1em] mb-6 md:mb-10"
          >
            {t('tour.subtitle')}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-9xl font-black text-white leading-none tracking-tighter uppercase"
          >
            {t('tour.title')}
          </motion.h1>
        </header>

        <section className="mb-24 md:mb-48">
          <div className="flex border-b border-white/10 mb-12 md:mb-20 gap-8 md:gap-16 overflow-x-auto pb-4 scrollbar-hide">
            {['upcoming', 'past'].map((type) => (
              <button 
                key={type}
                onClick={() => { setFilter(type as 'upcoming' | 'past'); setShowAll(false); }}
                className={`text-[11px] md:text-[12px] font-black uppercase tracking-[0.4em] pb-6 transition-all relative flex-shrink-0 ${filter === type ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}
              >
                {type === 'upcoming' ? t('tour.upcoming') : t('tour.archive')}
                {filter === type && (
                  <motion.div 
                    layoutId="activeTourTab"
                    className="absolute bottom-0 left-0 w-full h-[3px] bg-amber-400" 
                  />
                )}
              </button>
            ))}
          </div>

          <motion.div layout className="divide-y divide-white/5">
            <AnimatePresence mode="popLayout">
              {displayDates.map((date, i) => (
                <motion.div 
                  key={date.id} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between py-10 md:py-12 px-2 md:px-8 group transition-all hover:bg-white/5 hover:backdrop-blur-sm rounded-3xl gap-8"
                >
                  <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto">
                    <div className="min-w-[60px] md:min-w-[80px]">
                      <p className="text-2xl md:text-4xl font-black text-white tracking-tighter">{date.date.split(',')[0].split(' ')[1]}</p>
                      <p className="text-[10px] md:text-[11px] text-amber-400 uppercase font-black tracking-widest">{t(`tour.months.${date.date.split(',')[0].split(' ')[0]}`)}</p>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-3xl font-black text-white mb-2 leading-tight uppercase tracking-tight group-hover:text-amber-400 transition-colors">{date.venue}</h3>
                      <p className="text-slate-400 text-[10px] md:text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
                        <MapPin size={12} className="text-amber-400" /> {date.location} • {date.country}
                      </p>
                    </div>
                  </div>
                  <div className="w-full md:w-auto">
                    {filter === 'upcoming' ? (
                      <button 
                        onClick={() => handleTicketClick(date)} 
                        className="w-full md:w-auto bg-amber-400 text-slate-900 px-10 md:px-16 py-4 md:py-5 rounded-full text-[11px] md:text-[12px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl active:scale-95"
                      >
                        {t('tour.getTickets')}
                      </button>
                    ) : (
                      <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-600 px-8 md:px-10 py-4 md:py-5 border border-white/5 rounded-full block text-center">
                        {t('tour.concluded')}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {!showAll && filteredDates.length > 6 && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-20 text-center"
            >
              <button 
                onClick={() => setShowAll(true)}
                className="bg-white/5 border border-white/10 text-white hover:bg-amber-400 hover:text-slate-900 px-16 py-6 rounded-full text-[11px] font-black uppercase tracking-[0.3em] transition-all backdrop-blur-md active:scale-95"
              >
                {t('tour.viewAll')} ({filteredDates.length})
              </button>
            </motion.div>
          )}
        </section>

        <section>
          <div className="mb-16 md:mb-32 flex items-center gap-10">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">{t('tour.vip')}</h2>
            <div className="h-0.5 flex-grow bg-white/5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {VIP_PACKAGES.map((pkg, i) => (
              <motion.div 
                key={pkg.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 md:p-12 bg-white/5 border border-white/10 backdrop-blur-3xl rounded-[2rem] md:rounded-[3rem] hover:border-amber-400/50 hover:bg-white/10 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-8 md:mb-12">
                    <h3 className="text-2xl md:text-4xl font-black text-white leading-none uppercase tracking-tighter">{t(`vipPackages.${pkg.id}.name`)}</h3>
                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-amber-400 group-hover:text-slate-900 transition-colors">
                      <Star size={20} fill="currentColor" strokeWidth={0} />
                    </div>
                  </div>
                  <p className="text-3xl md:text-4xl font-black text-amber-400 mb-8 md:mb-12 tracking-tighter uppercase">€{pkg.price}</p>
                  <ul className="space-y-4 md:space-y-5 mb-10 md:mb-12">
                    {(t(`vipPackages.${pkg.id}.description`, { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i} className="flex items-start gap-4 md:gap-6 text-sm md:text-base font-medium text-slate-400 leading-relaxed group-hover:text-white transition-colors">
                        <CheckCircle2 size={18} className="text-amber-500/40 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <button 
                  onClick={() => handleVIPClick(pkg)} 
                  className="w-full bg-white text-slate-900 py-5 md:py-6 rounded-full text-[11px] md:text-[12px] font-black uppercase tracking-widest hover:bg-amber-400 transition-all shadow-xl active:scale-95"
                >
                  {t('tour.reserveUpgrade')}
                </button>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tour;
