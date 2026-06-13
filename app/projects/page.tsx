'use client';
import { useState } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

const categories = ['All', ...new Set(projects.map(p => p.category || 'DeFi'))];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('All');
  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => (p.category || 'DeFi') === activeTab);

  return (
    <div className="container-main py-6">
      <div className="fade-up">
        <h1 className="text-3xl md:text-4xl font-bold">📦 Projects</h1>
        <p className="text-gray-400 mt-1 mb-4">Real apps, real code, real impact</p>
      </div>

      {/* tabs */}
      <div className="tab-bar">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`tab-button ${activeTab === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* projects grid */}
      <div className="grid-tight">
        {filteredProjects.map((project, idx) => (
          <div key={idx} className="fade-up" style={{ animationDelay: `${idx * 0.05}s` }}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}