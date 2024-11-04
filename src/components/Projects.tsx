import React from 'react';
import { Code, ExternalLink } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Projects = () => {
  const projects = [
    {
      title: 'Disaster Tweet Classification',
      tech: 'Python, Flask, ML, NLP',
      description: 'Developed and deployed a system for real-time classification of disaster-related tweets using machine learning techniques.'
    },
    {
      title: 'Toxicity Classifier',
      tech: 'Python, ML, NLP, AI, Streamlit',
      description: 'Built an app using advanced language processing to analyze and identify toxic content in real-time.'
    }
  ];

  return (
    <section className="mb-20" id="projects">
      <SectionTitle icon={<Code className="text-blue-600" size={24} />} title="Projects" />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.tech}</p>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700">
              View Project <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;