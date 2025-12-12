import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
      <div className="relative overflow-hidden h-56">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a href={project.demoUrl} className="p-3 bg-white text-primary rounded-full hover:bg-secondary hover:text-white transition-colors" title="View Demo">
            <ExternalLink size={20} />
          </a>
          <a href={project.repoUrl} className="p-3 bg-white text-primary rounded-full hover:bg-secondary hover:text-white transition-colors" title="View Code">
            <Github size={20} />
          </a>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2">
            <span className="text-xs font-bold tracking-wider text-secondary uppercase bg-indigo-50 px-2 py-1 rounded-md">
                {project.category}
            </span>
        </div>
        <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
            {project.title}
        </h3>
        <p className="text-slate-600 mb-6 line-clamp-3 text-sm flex-grow">
            {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;