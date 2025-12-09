import React from 'react';
import { GenericPage } from './GenericPage';
import { LAB_MEMBERS } from '../constants';

export const People: React.FC = () => {
  return (
    <GenericPage 
      title="people" 
      subtitle="The researchers, students, and staff behind our work."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {LAB_MEMBERS.map((member) => (
          <div key={member.id} className="group">
            <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4 rounded-sm">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
            </div>
            <h3 className="text-xl font-medium text-gray-900 serif-font">{member.name}</h3>
            <p className="text-sm text-gray-500 font-mono uppercase tracking-wider mb-2">{member.role}</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </GenericPage>
  );
};