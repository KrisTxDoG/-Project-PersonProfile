import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">精選作品</h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            這裡展示了我近期的一些專案。從響應式網頁到複雜的 Web 應用程式，每一個作品都代表了我對品質的堅持。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-primary transition-colors">
                查看 Github 更多專案 &rarr;
            </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;