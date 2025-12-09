import React from 'react';
import { MemoryRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { MobileHeader } from './components/MobileHeader';
import { Home } from './pages/Home';
import { People } from './pages/People';
import { News } from './pages/News';
import { GenericPage } from './pages/GenericPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col md:flex-row min-h-screen bg-white text-gray-800 font-sans antialiased selection:bg-gray-200 selection:text-black">
        <Sidebar />
        <MobileHeader />

        {/* Main Content Area */}
        <main className="flex-1 md:ml-64 lg:ml-80 transition-all duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/people" element={<People />} />
            
            {/* Generic Placeholders for other routes */}
            <Route 
              path="/about" 
              element={
                <GenericPage title="about" subtitle="Our mission and history.">
                  <p className="mb-4">The Psychology Laboratory at the National University of Loja is dedicated to understanding the fundamental mechanisms of human cognition.</p>
                  <p>Our research intersects psychology, neuroscience, and data science to unravel how we learn, remember, and make decisions in an increasingly complex world.</p>
                  <img src="https://picsum.photos/seed/lab/800/400" className="w-full h-64 object-cover my-8 rounded-sm grayscale opacity-90" alt="Lab space" />
                  <p>Located in the heart of Loja, our facility provides state-of-the-art equipment for behavioral and physiological monitoring.</p>
                </GenericPage>
              } 
            />
            <Route 
              path="/research" 
              element={
                <GenericPage title="research" subtitle="Current projects and areas of inquiry.">
                  <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">Cognitive Mapping</h3>
                  <p className="mb-6">Investigating how humans build internal representations of physical and abstract spaces.</p>
                  
                  <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">Decision Dynamics</h3>
                  <p className="mb-6">Analyzing the temporal aspects of choice using drift-diffusion models.</p>
                </GenericPage>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <GenericPage title="contact" subtitle="Visit us.">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mt-2 mb-4 serif-font">Location</h3>
                      <p className="mb-4">
                        National University of Loja<br />
                        Psychology Building, Room 204<br />
                        Ciudadela Universitaria, La Argelia<br />
                        Loja, Ecuador
                      </p>
                      
                      <h3 className="text-xl font-medium text-gray-900 mt-6 mb-4 serif-font">Inquiries</h3>
                      <p className="mb-2">
                        <span className="font-semibold text-gray-500 text-sm uppercase tracking-wider">General:</span><br />
                        <a href="mailto:info@unl.edu.ec" className="text-blue-600 hover:underline">info@unl.edu.ec</a>
                      </p>
                      <p>
                        <span className="font-semibold text-gray-500 text-sm uppercase tracking-wider">Research Participation:</span><br />
                        <a href="mailto:participate@unl.edu.ec" className="text-blue-600 hover:underline">participate@unl.edu.ec</a>
                      </p>
                    </div>
                    <div className="bg-gray-100 rounded-sm h-64 md:h-full min-h-[300px] flex items-center justify-center relative overflow-hidden group">
                       <img src="https://picsum.photos/seed/map/600/600" alt="Map Location" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-500" />
                       <div className="absolute bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-mono uppercase tracking-widest">
                          Interactive Map Placeholder
                       </div>
                    </div>
                  </div>
                </GenericPage>
              } 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;