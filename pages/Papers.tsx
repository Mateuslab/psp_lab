import React from 'react';
import { GenericPage } from './GenericPage';
import { PAPERS } from '../constants';
import { FileText } from 'lucide-react';

export const Papers: React.FC = () => {
  return (
    <GenericPage 
      title="papers" 
      subtitle="Selected publications and conference proceedings."
    >
      <div className="space-y-8 mt-4">
        {PAPERS.map((paper) => (
          <div key={paper.id} className="block group">
            <div className="flex items-start space-x-4">
              <div className="mt-1 text-gray-300 group-hover:text-gray-900 transition-colors">
                <FileText size={20} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 leading-snug group-hover:text-blue-700 transition-colors cursor-pointer">
                  {paper.title}
                </h3>
                <p className="text-gray-600 mt-1">
                  {paper.authors}
                </p>
                <p className="text-sm text-gray-400 italic mt-1">
                  {paper.journal}, {paper.year}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </GenericPage>
  );
};