import React, { useState } from 'react';
import { X, ShoppingBag, Sparkles, Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { ALBUMS } from './constants';
import { CartItem, Album } from './types';

interface DiscographyProps {
  onAddToCart: (item: CartItem) => void;
}

const Discography: React.FC<DiscographyProps> = ({ onAddToCart }) => {
  const { t } = useTranslation();
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  const handleBuyAlbum = (album: Album) => {
    onAddToCart({
      id: album.id,
      name: `${album.title} ${t('discography.signedGift')}`,
      price: album.price,
      type: 'album',
      quantity: 1,
      imageUrl: album.coverUrl,
      isSigned: true
    });
    setSelectedAlbum(null);
  };

  return (
    <div className="pt-32 md:pt-48 pb-32 md:pb-64 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20 md:mb-32">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-amber-500 text-[11px] md:text-[12px] font-black uppercase tracking-[0.8em] mb-6 md:mb-8"
          >
            {t('discography.subtitle')}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-9xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter uppercase leading-none"
          >
            {t('discography.title')}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 md:gap-4 text-slate-400 text-[10px] md:text-[11px] font-black uppercase tracking-widest"
          >
            <div className="h-px w-12 bg-slate-200"></div>
            <Sparkles size={14} className="text-amber-500" /> {t('discography.signedEdition')}
          </motion.div>
        </header>

        <div className="space-y-4">
          {ALBUMS.map((album, i) => (
            <motion.div 
              key={album.id} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col md:flex-row items-center gap-8 md:gap-16 p-8 md:p-12 bg-white hover:bg-slate-50 border border-slate-100 transition-all duration-700 rounded-[2rem] md:rounded-[4rem] shadow-sm hover:shadow-2xl hover:shadow-slate-200/50"
            >
              <div className="w-48 md:w-40 h-48 md:h-40 flex-shrink-0 relative overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-slate-100 shadow-xl group-hover:scale-105 transition-transform duration-700">
                <img 
                  src={album.coverUrl} 
                  alt={album.title} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="flex-grow text-center md:text-left space-y-4">
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6">
                  <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-tight">{album.title}</h3>
                  {album.isPreorder && (
                    <span className="bg-amber-400 text-white px-4 md:px-5 py-1.5 text-[10px] md:text-[11px] font-black uppercase tracking-widest rounded-full">
                      {t('discography.preOrder')}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 items-center text-slate-400 text-[10px] md:text-[11px] font-black uppercase tracking-widest">
                   <span className="text-slate-900">{album.year} {t('discography.edition')}</span>
                   <span className="w-1 h-1 bg-amber-400 rounded-full" />
                   <span>{t('discography.signedEdition')}</span>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-end gap-6 md:gap-10 min-w-[200px]">
                <p className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">€{album.price.toFixed(2)}</p>
                <div className="flex items-center gap-8">
                  <button 
                    onClick={() => setSelectedAlbum(album)} 
                    className="text-[11px] md:text-[12px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-slate-900 transition-colors py-2"
                  >
                    {t('home.explore')}
                  </button>
                  <button 
                    onClick={() => handleBuyAlbum(album)} 
                    className="bg-amber-400 text-white px-8 md:px-12 py-4 md:py-5 rounded-full text-[11px] md:text-[12px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-amber-400/20 hover:shadow-slate-900/40 flex items-center gap-3 active:scale-95"
                  >
                    <Plus size={16} strokeWidth={3} /> {t('discography.buyNow')}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedAlbum && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-2xl"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white w-full max-w-xl overflow-hidden rounded-[3rem] md:rounded-[5rem] p-8 md:p-20 flex flex-col items-center text-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative"
              >
                <button 
                  onClick={() => setSelectedAlbum(null)} 
                  className="absolute top-8 right-8 text-slate-300 hover:text-slate-900 transition-colors p-2 hover:rotate-90 duration-300"
                >
                  <X size={32} strokeWidth={3} />
                </button>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="w-48 md:w-64 h-48 md:h-64 mb-10 md:mb-16 shadow-2xl rounded-[2rem] md:rounded-[4rem] overflow-hidden border border-slate-100"
                >
                  <img src={selectedAlbum.coverUrl} className="w-full h-full object-cover" alt={selectedAlbum.title} referrerPolicy="no-referrer" loading="lazy" />
                </motion.div>

                <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-4 leading-none tracking-tighter uppercase">{selectedAlbum.title}</h2>
                <p className="text-[11px] md:text-[12px] text-amber-500 uppercase font-black tracking-[0.5em] mb-12 md:mb-20">{t('discography.signedEdition')}</p>
                
                <button 
                  onClick={() => handleBuyAlbum(selectedAlbum)} 
                  className="w-full bg-amber-400 text-white py-6 md:py-8 rounded-full uppercase tracking-widest text-[11px] md:text-[12px] font-black hover:bg-slate-900 transition-all shadow-2xl shadow-amber-400/30 flex items-center justify-center gap-4 active:scale-95"
                >
                  <ShoppingBag size={20} /> {selectedAlbum.isPreorder ? t('discography.preOrder') : t('discography.buyNow')}
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Discography;