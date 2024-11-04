import React from 'react';
import { Wrench } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C', 'Python', 'Java', 'C#'],
      colorClass: 'bg-blue-100 text-blue-800'
    },
    {
      title: 'Web Technologies',
      skills: ['HTML', 'CSS', 'JavaScript', 'ReactJs', 'NodeJs', 'ExpressJs'],
      colorClass: 'bg-green-100 text-green-800'
    },
    {
      title: 'Tools & Frameworks',
      skills: ['Flask', 'Django', 'Git', 'PowerBI', 'Tableau', 'Visual Studio'],
      colorClass: 'bg-purple-100 text-purple-800'
    },
    {
      title: 'Databases',
      skills: ['SQL', 'MySQL', 'PLSQL', 'MongoDB'],
      colorClass: 'bg-yellow-100 text-yellow-800'
    }
  ];

  return (
    <section className="mb-20" id="skills">
      <SectionTitle icon={<Wrench className="text-blue-600" size={24} />} title="Technical Skills" />
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className={`px-3 py-1 rounded-full text-sm ${category.colorClass}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;