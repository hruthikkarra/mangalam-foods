'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Clock, CheckCircle2, ChevronRight, Loader2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const PRODUCTS = [
  { id: 'dosa', name: 'Dosa Batter', desc: 'Classic crispy dosa batter', img: 'https://images.unsplash.com/photo-1743517894265-c86ab035adef?crop=entropy&cs=srgb&fm=jpg&w=400&q=80' },
  { id: 'idli', name: 'Idli Batter', desc: 'Soft & fluffy idlis', img: 'https://images.unsplash.com/photo-1730191843435-073792ba22bc?crop=entropy&cs=srgb&fm=jpg&w=400&q=80' },
  { id: 'multi-millet', name: 'Multi Millet Dosa', desc: 'Ancient grains blend', img: 'https://images.unsplash.com/photo-1768729339998-909158957162?crop=entropy&cs=srgb&fm=jpg&w=400&q=80' },
  { id: 'ragi', name: 'Ragi Dosa', desc: 'Gluten-free & fiber rich', img: 'https://images.unsplash.com/photo-1612257416648-ee7a6c533b4f?crop=entropy&cs=srgb&fm=jpg&w=400&q=80' },
  { id: 'wheat', name: 'Wheat Dosa', desc: 'Wholesome wheat goodness', img: 'https://images.pexels.com/photos/12392915/pexels-photo-12392915.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 'uttapam', name: 'Uttapam Batter', desc: 'Thick and savory', img: 'https://images.unsplash.com/photo-1632104667384-06f58cb7ad44?crop=entropy&cs=srgb&fm=jpg&w=400&q=80' },
  { id: 'appam', name: 'Appam Batter', desc: 'Lacy edges, soft center', img: 'https://images.unsplash.com/photo-1552585960-0e1069ce7405?crop=entropy&cs=srgb&fm=jpg&w=400&q=80' },
  { id: 'vada', name: 'Vada Batter', desc: 'Crispy lentil donuts', img: 'https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const INTERESTS = [
  'Product Sampling',
  'Bulk Purchase',
  'Retail Partnership',
  'Distributor Opportunity',
  'Restaurant Supply',
  'Product Catalogue',
];

export default function EventModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', city: '', visitors: '1', visitDate: '',
    product: '', interests: [], comments: ''
  });

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleInterestChange = (interest) => {
    setForm(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error('Please fill in your Name, Email, and Phone Number.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/event-register', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Registration failed');
      
      setSuccess(true);
      toast.success(data.message);
    } catch (err) {
      toast.error(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl premium-shadow-2xl overflow-hidden my-auto z-10 flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-20 h-10 w-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 transition-colors shadow-sm"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left Sidebar: Event Info */}
            <div className="w-full md:w-2/5 bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] text-white p-8 md:p-10 flex flex-col relative overflow-hidden shrink-0">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F57C00]/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-widest uppercase mb-6">
                  <Sparkles className="h-3.5 w-3.5 text-[#F57C00]" />
                  <span>Exclusive Event</span>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Meet Mangalam Foods
                </h2>
                <p className="text-white/80 leading-relaxed mb-8">
                  Register to visit our stall, explore our products, request samples, and connect with our team.
                </p>

                <div className="mt-8 hidden md:block">
                  <img src="https://images.unsplash.com/photo-1555243896-c709bfa0b564?crop=entropy&cs=srgb&fm=jpg&w=600&q=80" alt="Food Expo" className="rounded-2xl border border-white/10 opacity-80" />
                </div>
              </div>
            </div>

            {/* Right Side: Form Content */}
            <div className="w-full md:w-3/5 p-8 md:p-10 overflow-y-auto custom-scrollbar bg-[#FBF7F0]">
              {success ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="h-24 w-24 rounded-full bg-[#2E7D32]/10 grid place-items-center mb-6">
                    <CheckCircle2 className="h-12 w-12 text-[#2E7D32]" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-[#1A1410] mb-4">You're Registered!</h3>
                  <p className="text-gray-600 mb-8 max-w-sm">Thank you for registering! We look forward to welcoming you at the Mangalam Foods stall.</p>
                  <Button onClick={onClose} size="lg" className="rounded-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white px-8">
                    Close Window
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={submit} className="space-y-8">
                  
                  {step === 1 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <div className="mb-6 flex items-center justify-between">
                        <h3 className="font-display text-2xl font-bold text-[#1A1410]">Your Details</h3>
                        <span className="text-sm font-semibold text-[#F57C00]">Step 1 of 2</span>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="sm:col-span-2">
                          <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2 block">Full Name *</label>
                          <Input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Jane Doe" className="rounded-xl h-12 border-gray-200 focus-visible:ring-[#2E7D32] bg-white" required />
                        </div>
                        <div>
                          <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2 block">Email Address *</label>
                          <Input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="jane@example.com" className="rounded-xl h-12 border-gray-200 focus-visible:ring-[#2E7D32] bg-white" required />
                        </div>
                        <div>
                          <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2 block">Phone Number *</label>
                          <Input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+1 (555) 000-0000" className="rounded-xl h-12 border-gray-200 focus-visible:ring-[#2E7D32] bg-white" required />
                        </div>
                        <div>
                          <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2 block">Company (Optional)</label>
                          <Input value={form.company} onChange={e => setForm({...form, company: e.target.value})} placeholder="Your Company" className="rounded-xl h-12 border-gray-200 focus-visible:ring-[#2E7D32] bg-white" />
                        </div>
                        <div>
                          <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2 block">City / State</label>
                          <Input value={form.city} onChange={e => setForm({...form, city: e.target.value})} placeholder="Boston, MA" className="rounded-xl h-12 border-gray-200 focus-visible:ring-[#2E7D32] bg-white" />
                        </div>
                        <div>
                          <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2 block">No. of Visitors</label>
                          <select value={form.visitors} onChange={e => setForm({...form, visitors: e.target.value})} className="w-full h-12 rounded-xl border border-gray-200 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#2E7D32]">
                            <option value="1">1 Person</option>
                            <option value="2">2 People</option>
                            <option value="3-5">3 - 5 People</option>
                            <option value="5+">5+ People</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2 block">Preferred Visit Date</label>
                          <input 
                            type="date"
                            value={form.visitDate} 
                            onChange={e => setForm({...form, visitDate: e.target.value})} 
                            className="w-full h-12 rounded-xl border border-gray-200 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
                          />
                        </div>
                      </div>

                      <div className="mt-8 flex gap-3">
                        <Button type="button" onClick={() => setStep(2)} size="lg" className="flex-1 rounded-xl bg-[#F57C00] hover:bg-[#E65100] text-white h-14 text-base font-semibold premium-shadow">
                          Next Step <ChevronRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <div className="mb-6 flex items-center justify-between">
                        <h3 className="font-display text-2xl font-bold text-[#1A1410]">Products & Interests</h3>
                        <span className="text-sm font-semibold text-[#F57C00]">Step 2 of 2</span>
                      </div>

                      <div className="mb-8">
                        <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3 block">Primary Product Interest (Select One)</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {PRODUCTS.map(p => {
                            const isSelected = form.product === p.name;
                            return (
                              <div 
                                key={p.id} 
                                onClick={() => setForm({...form, product: p.name})}
                                className={`relative cursor-pointer rounded-2xl overflow-hidden border-2 transition-all duration-300 group ${isSelected ? 'border-[#2E7D32] ring-2 ring-[#2E7D32]/20' : 'border-transparent bg-white hover:premium-shadow-lg'}`}
                              >
                                <div className="aspect-[4/3] overflow-hidden">
                                  <img src={p.img} alt={p.name} className={`w-full h-full object-cover transition-transform duration-500 ${isSelected ? 'scale-105' : 'group-hover:scale-110'}`} />
                                </div>
                                <div className={`p-2.5 ${isSelected ? 'bg-[#2E7D32]/5' : ''}`}>
                                  <div className="font-semibold text-sm text-[#1A1410] leading-tight">{p.name}</div>
                                  <div className="text-[10px] text-gray-500 mt-0.5 line-clamp-1">{p.desc}</div>
                                </div>
                                {isSelected && (
                                  <div className="absolute top-2 right-2 h-5 w-5 bg-[#2E7D32] rounded-full flex items-center justify-center text-white premium-shadow">
                                    <CheckCircle2 className="h-3 w-3" />
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="mb-8">
                        <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3 block">Additional Interests</label>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {INTERESTS.map(interest => (
                            <label key={interest} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 cursor-pointer hover:border-[#2E7D32]/30 transition-colors">
                              <input 
                                type="checkbox" 
                                checked={form.interests.includes(interest)}
                                onChange={() => handleInterestChange(interest)}
                                className="h-4 w-4 rounded border-gray-300 text-[#2E7D32] focus:ring-[#2E7D32]"
                              />
                              <span className="text-sm font-medium text-gray-700">{interest}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="mb-8">
                        <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2 block">Comments / Questions</label>
                        <Textarea value={form.comments} onChange={e => setForm({...form, comments: e.target.value})} placeholder="Any specific requirements?" className="rounded-xl border-gray-200 focus-visible:ring-[#2E7D32] bg-white resize-none" rows={3} />
                      </div>

                      <div className="flex gap-3 pt-4 border-t border-gray-200">
                        <Button type="button" variant="outline" onClick={() => setStep(1)} className="rounded-xl h-14 border-gray-300 text-gray-600 hover:bg-gray-50">
                          Back
                        </Button>
                        <Button type="submit" disabled={loading} className="flex-1 rounded-xl bg-[#2E7D32] hover:bg-[#1B5E20] text-white h-14 text-base font-semibold premium-shadow">
                          {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Register Now'}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
