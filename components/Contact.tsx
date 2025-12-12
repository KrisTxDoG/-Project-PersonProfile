import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import { sendEmail } from '../services/emailService';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await sendEmail(formData);
      if (response.success) {
        setStatus('success');
        setFeedback(response.message);
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setStatus('error');
        setFeedback(response.message);
      }
    } catch (error) {
      setStatus('error');
      setFeedback('發生意外錯誤，請稍後再試。');
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">聯絡我</h2>
            <div className="w-20 h-1.5 bg-secondary rounded-full mb-8"></div>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              有任何專案合作的想法，或是想聊聊技術？歡迎填寫表單或透過以下方式聯繫我。我會盡快回覆您！
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-secondary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Email</h4>
                  <a href="mailto:alex@example.com" className="text-slate-600 hover:text-secondary transition-colors">alex@example.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-secondary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">電話</h4>
                  <p className="text-slate-600">+886 912 345 678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-secondary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">地點</h4>
                  <p className="text-slate-600">台北市, 台灣 (可遠端合作)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">姓名</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                  placeholder="您的稱呼"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">訊息內容</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"
                  placeholder="請簡述您的需求..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all ${
                  status === 'success' 
                    ? 'bg-green-500 hover:bg-green-600' 
                    : 'bg-primary hover:bg-slate-800'
                } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="animate-spin" size={20} /> 發送中...
                  </>
                ) : status === 'success' ? (
                  '發送成功！'
                ) : (
                  <>
                    發送訊息 <Send size={18} />
                  </>
                )}
              </button>
              
              {status === 'error' && (
                <p className="text-red-500 text-sm text-center mt-2">{feedback}</p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;