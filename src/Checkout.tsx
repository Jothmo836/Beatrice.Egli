import React from 'react';
import { ShoppingBag, Plus, Minus, ArrowRight, Sparkles, ShieldCheck, Mail, MessageCircle, Info, Copy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ASSETS } from './assets';
import { CartItem } from './types';

interface CheckoutProps {
  cart: CartItem[];
  onRemove: (id: string) => void;
  onUpdate: (id: string, delta: number) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cart, onRemove, onUpdate }) => {
  const { t } = useTranslation();
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const orderTotal = total * 1.08;

  const MGR_EMAIL = ASSETS.LINKS.MANAGEMENT_EMAIL;
  const MGR_WHATSAPP = ASSETS.LINKS.MANAGEMENT_WHATSAPP;
  const WHATSAPP_ID = ASSETS.LINKS.WHATSAPP_ID;

  const generateOrderSummary = () => {
    const itemList = cart.map(item => `- ${item.name} (x${item.quantity}): €${(item.price * item.quantity).toFixed(2)}`).join('\n');
    return t('checkout.messageTemplate', { 
      items: itemList, 
      total: orderTotal.toFixed(2) 
    });
  };

  const handleEmailCheckout = () => {
    const subject = encodeURIComponent(t('checkout.orderInquiry'));
    const body = encodeURIComponent(generateOrderSummary());
    window.location.href = `mailto:${MGR_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppCheckout = () => {
    const text = encodeURIComponent(generateOrderSummary());
    window.open(`https://wa.me/${WHATSAPP_ID}?text=${text}`, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-64 px-6 min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={ASSETS.STORY.HERO_PARALLAX_BG} className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-xl p-16 md:p-24 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[3rem] shadow-2xl relative z-10"
        >
          <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-12">
            <ShoppingBag size={32} className="text-amber-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-8 leading-none tracking-tighter uppercase">{t('checkout.empty')}</h1>
          <p className="text-lg font-medium text-slate-400 mb-12 leading-relaxed uppercase tracking-tight">{t('checkout.emptyDesc')}</p>
          <div className="flex justify-center">
            <Link to="/discography" className="bg-amber-400 text-slate-900 px-12 py-5 rounded-full font-black uppercase tracking-widest text-[12px] hover:bg-white transition-all shadow-xl active:scale-95">
              {t('checkout.browse')}
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-48 pb-64 px-6 min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0 opacity-30 fixed">
        <img src={ASSETS.STORY.HERO_PARALLAX_BG} className="w-full h-full object-cover grayscale pointer-events-none" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/40 to-slate-900" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-12 gap-10">
          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-amber-400 text-[11px] font-black uppercase tracking-[0.6em]"
            >
              {t('checkout.reviewSelection')}
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.8] uppercase"
            >
              {t('checkout.title')}
            </motion.h1>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 text-white/40 text-[10px] font-black uppercase tracking-widest bg-white/5 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-md mb-2"
          >
            <ShieldCheck size={14} className="text-amber-400" /> {t('checkout.verification')}
          </motion.div>
        </header>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Order Items */}
          <div className="lg:w-3/5 space-y-6">
            <div className="space-y-4">
              {cart.map((item, idx) => (
                <motion.div 
                  key={item.id} 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  className="group relative flex flex-col sm:flex-row items-center gap-10 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] hover:border-amber-400 hover:bg-white/10 transition-all duration-500"
                >
                  <div className="w-28 h-28 flex-shrink-0 bg-slate-800 rounded-2xl overflow-hidden border border-white/5 group-hover:scale-105 transition-transform duration-500">
                    <img src={item.imageUrl} className="w-full h-full object-cover" alt={item.name} referrerPolicy="no-referrer" />
                  </div>
                  
                  <div className="flex-grow text-center sm:text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest text-amber-500 mb-2">
                      {t(`common.${item.type}`)}
                    </p>
                    <h3 className="text-3xl text-white font-bold tracking-tight mb-3 group-hover:text-amber-400 transition-colors uppercase">{item.name}</h3>
                    {item.type === 'album' && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/10 text-amber-400 text-9px rounded-full font-black uppercase tracking-widest">
                        <Sparkles size={10} /> {t('discography.signedEdition')}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-10">
                    <div className="flex items-center gap-5 bg-white/5 rounded-full px-5 py-2 border border-white/10 group-hover:border-amber-400/30 transition-colors">
                      <button onClick={() => onUpdate(item.id, -1)} className="text-slate-500 hover:text-amber-400 transition-colors p-1"><Minus size={14} /></button>
                      <span className="text-lg font-mono text-white font-bold w-4 text-center">{item.quantity}</span>
                      <button onClick={() => onUpdate(item.id, 1)} className="text-slate-500 hover:text-amber-400 transition-colors p-1"><Plus size={14} /></button>
                    </div>
                    <div className="text-right min-w-[120px]">
                      <p className="text-2xl font-mono font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">€{(item.price * item.quantity).toFixed(2)}</p>
                      <button onClick={() => onRemove(item.id)} className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-red-400 transition-colors">{t('checkout.remove')}</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="pt-8">
              <Link to="/discography" className="group inline-flex items-center gap-4 text-slate-500 font-black uppercase tracking-widest text-[11px] hover:text-white transition-all">
                 <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-2 transition-transform" /> {t('checkout.browse')}
              </Link>
            </div>
          </div>

          {/* Checkout Panel */}
          <div className="lg:w-2/5">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-3xl border border-white/10 p-10 md:p-14 rounded-[3rem] shadow-2xl sticky top-32"
            >
              <h2 className="text-4xl font-black text-white mb-12 uppercase tracking-tighter">{t('checkout.finalize')}</h2>
              
              <div className="space-y-6 font-mono text-[13px] uppercase tracking-[0.2em] text-slate-400 ">
                <div className="flex justify-between items-center">
                   <span>{t('checkout.subtotal')}</span>
                   <span className="text-white font-bold">€{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                   <span>{t('checkout.tax')}</span>
                   <span className="text-white font-bold">€{(total * 0.08).toFixed(2)}</span>
                </div>
                <div className="h-px bg-white/10 my-8" />
                <div className="flex justify-between items-end">
                   <div>
                     <p className="text-[10px] text-amber-400 font-black tracking-[0.3em] mb-2">FINAL SETTLEMENT</p>
                     <span className="text-4xl md:text-5xl font-black text-white tracking-tighter">{t('checkout.total')}</span>
                   </div>
                   <span className="text-4xl md:text-5xl font-mono font-black text-amber-400 tracking-tighter">€{orderTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Direct Contact Info Card */}
              <div className="mt-14 mb-10 p-8 bg-white/5 border border-white/5 rounded-[2rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-8 ">{t('checkout.managementAccess')}</p>
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                      <Mail size={16} className="text-amber-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-black text-slate-500 mb-0.5 tracking-widest">{t('checkout.email')}</span>
                      <span className="text-sm font-bold text-slate-300 select-all">{MGR_EMAIL}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                      <MessageCircle size={16} className="text-emerald-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-black text-slate-500 mb-0.5 tracking-widest">{t('checkout.whatsapp')}</span>
                      <span className="text-sm font-bold text-emerald-400 select-all">{MGR_WHATSAPP}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <button 
                  onClick={handleEmailCheckout}
                  className="w-full bg-white text-slate-900 py-6 rounded-[1.25rem] flex items-center justify-center gap-4 font-black uppercase tracking-[0.4em] text-[12px] hover:bg-amber-400 transition-all shadow-xl shadow-white/5 group active:scale-[0.98]"
                >
                  <Mail size={18} className="group-hover:scale-110 transition-transform" /> {t('checkout.contactEmail')}
                </button>
                <button 
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-emerald-500 text-white py-6 rounded-[1.25rem] flex items-center justify-center gap-4 font-black uppercase tracking-[0.4em] text-[12px] hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/10 group active:scale-[0.98]"
                >
                  <MessageCircle size={18} className="group-hover:scale-110 transition-transform" /> {t('checkout.contactWhatsApp')}
                </button>
              </div>
              
              <div className="mt-12 space-y-6">
                 <div className="h-px bg-white/10" />
                 <p className="text-[11px] text-slate-500 font-bold leading-relaxed text-center px-4">
                    {t('checkout.instruction')}
                 </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
