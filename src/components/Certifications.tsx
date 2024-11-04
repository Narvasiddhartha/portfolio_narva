import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Certifications = () => {
  const certifications = [
    {
      title: 'Fundamentals of Accelerated Computing with CUDA Python',
      date: 'July 2024',
      verifyLink: 'https://learn.nvidia.com/certificates?id=I9LgYK5BRcmcBW16Gsjmrg'
    },
    {
      title: 'Natural Language Processing in TensorFlow',
      date: 'March 2024',
      verifyLink: 'https://www.coursera.org/account/accomplishments/records/28KBEHRGPXNE'
    },
    {
      title: 'Microsoft Certified: Azure AI Fundamentals',
      date: 'March 2024',
      verifyLink: 'https://drive.google.com/file/d/1xUe1YrXnVfLdWKFWq8NZ4mg-vZTxGGO3/view?usp=sharing'
    },
    {
      title: 'IBM Certified: Machine Learning',
      date: 'May 2024',
      verifyLink: 'https://drive.google.com/file/d/1wuUP5ZSuE7HgrcM5HoMIhdRzFTGvwfcI/view?usp=share_link'
    },
    {
      title: 'Postman API Fundamentals Student Expert',
      date: 'July 2024',
      verifyLink: 'https://api.badgr.io/public/assertions/Wft5_eYyRWitQ8xRM-2S-A'
    }
  ];

  return (
    <section className="mb-20">
      <SectionTitle icon={<Award className="text-blue-600" size={24} />} title="Certifications" />
      <div className="bg-white rounded-lg shadow-md p-6">
        <ul className="space-y-4">
          {certifications.map((cert, index) => (
            <li key={index} className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">{cert.title}</p>
                <p className="text-gray-600">{cert.date}</p>
              </div>
              <a
                href={cert.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                Verify <ExternalLink size={16} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;