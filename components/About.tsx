import React from 'react';
import { Layers, Smartphone, Cpu, Palette } from 'lucide-react';

const skills = [
  { icon: <Layers size={24} />, title: "Web Development", desc: "React, TypeScript, Next.js" },
  { icon: <Smartphone size={24} />, title: "Responsive Design", desc: "Tailwind CSS, Mobile First" },
  { icon: <Cpu size={24} />, title: "Backend Integration", desc: "Node.js, RESTful API, GraphQL" },
  { icon: <Palette size={24} />, title: "UI/UX Design", desc: "Figma, Prototyping, User Flow" },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">關於我</h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            熱愛技術與設計的結合。我不僅僅是寫程式碼，更在意如何透過技術解決實際問題，創造令人愉悅的使用者體驗。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-indigo-50 text-secondary rounded-xl flex items-center justify-center mb-6">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{skill.title}</h3>
              <p className="text-slate-500">{skill.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-4">持續學習，不斷進化</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    從最初的 HTML/CSS 到現在深入研究現代化前端架構，我的學習之旅從未停止。我喜歡在開源社群貢獻，並時刻關注最新的技術趨勢，例如 WebAssembly 與 AI 整合應用。
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-3 rounded-lg text-center border border-slate-200">
                        <span className="block font-bold text-2xl text-secondary">50+</span>
                        <span className="text-sm text-slate-500">完成專案</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg text-center border border-slate-200">
                        <span className="block font-bold text-2xl text-secondary">30+</span>
                        <span className="text-sm text-slate-500">滿意客戶</span>
                    </div>
                </div>
            </div>
            <div className="flex-1 w-full">
                <img src="https://picsum.photos/id/3/800/500" alt="Coding workspace" className="rounded-xl object-cover w-full h-64 md:h-80 shadow-lg" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;