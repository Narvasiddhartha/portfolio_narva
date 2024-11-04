import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Experience = () => {
  const experiences = [
    {
      title: 'AIoT Intern',
      company: 'NITW – Warangal, India',
      period: 'May 2024 – July 2024',
      certificate: 'https://drive.google.com/file/d/1uuwuVpUAr_aURfvGFFSKIwzCirO2ar5M/view',
      points: [
        'Integrated artificial intelligence with IoT to develop smart, autonomous systems',
        'Developed and tested intelligent IoT devices',
        'Strengthened technical skills in AI, IoT, and programming'
      ]
    },
    {
      title: 'AI Developer Intern',
      company: 'IBM Skillsbuild – India',
      period: 'July 2024 – Aug 2024',
      certificate: 'https://drive.google.com/file/d/13EWO5CLxg39nRn60KlARtjva5_XBKyfj/view',
      points: [
        'Completed masterclasses on AI, Generative AI, transformers, LLMs',
        'Developed and fine-tuned a chatbot using Watson Assistant'
      ]
    }
  ];

  return (
    <section className="mb-20" id="experience">
      <SectionTitle icon={<Briefcase className="text-blue-600" size={24} />} title="Experience" />
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
                <p className="text-gray-600">{exp.company}</p>
              </div>
              <span className="text-gray-500">{exp.period}</span>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;