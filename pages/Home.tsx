import React from 'react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center min-h-[80vh] px-6 lg:px-12 fade-in">
      <div className="max-w-4xl w-full">
        <div className="relative bg-[#f4f1ea] p-8 md:p-12 lg:p-16 shadow-sm rounded-sm">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Content mimicking the sketch in the reference */}
            <div className="order-2 md:order-1 flex justify-center opacity-80 grayscale hover:grayscale-0 transition-all duration-700">
               <img 
                src="https://picsum.photos/id/24/400/400" 
                alt="Cognitive Sketch" 
                className="mix-blend-multiply opacity-60"
               />
            </div>

            {/* Right Content mimicking the scattered objects in reference */}
            <div className="order-1 md:order-2">
               <img 
                 src="https://picsum.photos/id/20/600/600"
                 alt="Lab Art" 
                 className="w-full h-auto mix-blend-multiply opacity-90 rounded-sm"
               />
            </div>
          </div>

          <div className="absolute bottom-2 right-4 text-[10px] text-gray-400 font-mono">
            art credit: Abstract Collections
          </div>
        </div>

        <div className="mt-8 text-center md:text-left">
          <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed serif-font">
            "The mind is not a vessel to be filled, but a fire to be kindled."
          </p>
          <p className="mt-2 text-sm text-gray-400 font-mono uppercase tracking-widest">
            National University of Loja — Est. 2024
          </p>
        </div>
      </div>
    </div>
  );
};