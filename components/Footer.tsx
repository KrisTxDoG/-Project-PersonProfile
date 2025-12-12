import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-slate-300 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Alex Chen. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm">
           <a href="#" className="hover:text-white transition-colors">隱私權政策</a>
           <a href="#" className="hover:text-white transition-colors">使用條款</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;