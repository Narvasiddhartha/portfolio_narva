import React from 'react';
import { BookOpen } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Education = () => {
  return (
    <section className="mb-20">
      <SectionTitle icon={<BookOpen className="text-blue-600" size={24} />} title="Education" />
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-900">SR University</h3>
        <p className="text-gray-600">Bachelor of Technology in Computer Science (AIML) </p>
        <p className="text-gray-500">Nov 2022 – Jun 2026</p>
        <p className="text-blue-600 font-semibold mt-2"></p>
      </div>
    </section>
  );
};

export default Education;