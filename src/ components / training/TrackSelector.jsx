import React from 'react';
import { clsx } from 'clsx';

const TrackSelector = ({ tracks, activeTrack, onTrackChange }) => {
  return (
    <div className="flex justify-center gap-4 mb-8">
      {Object.keys(tracks).map((track) => (
        <button
          key={track}
          onClick={() => onTrackChange(track)}
          className={clsx(
            'px-6 py-3 rounded-lg font-medium transition-all',
            {
              'bg-blue-600 text-white': activeTrack === track,
              'bg-slate-700 text-slate-300 hover:bg-slate-600': activeTrack !== track,
            },
          )}
          aria-label={`Switch to ${tracks[track].title}`}
        >
          {tracks[track].title}
        </button>
      ))}
    </div>
  );
};

export default TrackSelector;
