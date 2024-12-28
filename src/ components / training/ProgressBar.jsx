import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-slate-700 rounded-full h-4 relative overflow-hidden">
      <div
        className="bg-blue-600 h-full transition-all duration-500"
        style={{ width: `${progress}%` }}
        aria-label={`Progress: ${progress}%`}
        role="progressbar"
      />
    </div>
  );
};

export default ProgressBar;
