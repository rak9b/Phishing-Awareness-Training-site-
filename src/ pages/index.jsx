import React, { useState } from 'react';
import TrackSelector from '@/components/training/TrackSelector';
import ProgressBar from '@/components/training/ProgressBar';
import ModuleCard from '@/components/training/ModuleCard';
import { tracks } from '@/lib/trackData';

const HomePage = () => {
  // State for active training track
  const [activeTrack, setActiveTrack] = useState('ceh');

  // State for progress and completed modules
  const [progress, setProgress] = useState(0);
  const [completedModules, setCompletedModules] = useState([]);

  // Handle track changes
  const handleTrackChange = (track) => {
    setActiveTrack(track);
    setProgress(0); // Reset progress for new track
    setCompletedModules([]); // Reset completed modules
  };

  // Handle module start and progress update
  const handleStartModule = (moduleIndex) => {
    if (!completedModules.includes(moduleIndex)) {
      const updatedModules = [...completedModules, moduleIndex];
      setCompletedModules(updatedModules);

      const totalModules = tracks[activeTrack].modules.length;
      const updatedProgress = (updatedModules.length / totalModules) * 100;
      setProgress(updatedProgress);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Security Training Platform
          </h1>
          <p className="text-slate-300 text-lg">
            Master cybersecurity with hands-on CEH and OSCP training modules.
          </p>
        </header>

        {/* Track Selector */}
        <TrackSelector
          tracks={tracks}
          activeTrack={activeTrack}
          onTrackChange={handleTrackChange}
        />

        {/* Progress Bar */}
        <ProgressBar progress={progress} />

        {/* Module Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {tracks[activeTrack].modules.map((module, index) => (
            <ModuleCard
              key={index}
              module={module}
              index={index}
              onStart={() => handleStartModule(index)}
              isCompleted={completedModules.includes(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
