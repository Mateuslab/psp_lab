import React from 'react';
import { GenericPage } from './GenericPage';
import { NEWS } from '../constants';

export const News: React.FC = () => {
  return (
    <GenericPage 
      title="news" 
      subtitle="Latest updates from the laboratory."
    >
      <div className="border-l-2 border-gray-100 pl-8 space-y-12">
        {NEWS.map((item) => (
          <article key={item.id} className="relative">
            <div className="absolute -left-[39px] top-1 w-5 h-5 bg-white border-2 border-gray-200 rounded-full" />
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase font-mono mb-2 block">
              {item.date}
            </span>
            <h3 className="text-2xl text-gray-900 mb-3 serif-font">
              {item.title}
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              {item.summary}
            </p>
          </article>
        ))}
      </div>
    </GenericPage>
  );
};