import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Code2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-100 text-secondary font-semibold text-sm tracking-wide">
              👋 您好，我是 Krist Cai
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-primary tracking-tight leading-tight mb-6">
              將創意轉化為 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                卓越的數位體驗
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              我是一名專注於前端開發與 UI/UX 設計的工程師。致力於打造高效能、可維護且具備極致使用者體驗的網頁應用程式。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#portfolio"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-white font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
              >
                瀏覽作品
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-300 text-slate-700 font-semibold hover:border-secondary hover:text-secondary transition-all bg-white"
              >
                聯絡我
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-slate-400">
              <a href="#" className="hover:text-secondary transition-colors"><Github size={24} /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Linkedin size={24} /></a>
              <a href="mailto:alex@example.com" className="hover:text-secondary transition-colors"><Mail size={24} /></a>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="flex-1 relative">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-accent rounded-[2rem] rotate-6 opacity-20"></div>
              <img 
                src="https://picsum.photos/id/64/800/800" 
                alt="Profile" 
                className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl border-4 border-white"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce hidden sm:flex">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <Code2 size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Experience</p>
                  <p className="text-sm font-bold text-slate-800">5+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
