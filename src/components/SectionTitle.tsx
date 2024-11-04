import React, { ReactNode } from 'react';

interface SectionTitleProps {
  icon: ReactNode;
  title: string;
}

const SectionTitle = ({ icon, title }: SectionTitleProps) => {
  return (
    <div className="flex items-center gap-2 mb-6">
      {icon}
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
  );
};

export default SectionTitle;