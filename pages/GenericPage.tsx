import React from 'react';

interface GenericPageProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const GenericPage: React.FC<GenericPageProps> = ({ title, subtitle, children }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 lg:py-20 fade-in">
      <header className="mb-12 border-b border-gray-100 pb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 lowercase serif-font tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </header>
      <div className="prose prose-lg prose-gray max-w-none font-light">
        {children}
      </div>
    </div>
  );
};