import React from 'react';
import { clsx } from 'clsx';
import Button from '@/components/ui/Button';

const ModuleCard = ({ module, index, onStart, isCompleted }) => {
  const Icon = module.icon;

  return (
    <div
      className={clsx(
        'card bg-slate-800 border-slate-700 p-4 rounded-lg shadow-md transform transition-all',
        { 'opacity-75': isCompleted },
      )}
    >
      <div className="flex justify-between items-center mb-4">
        <Icon className="w-8 h-8 text-blue-400" />
        <span className="text-slate-300 bg-slate-900 px-3 py-1 text-sm rounded-full">
          Module {index + 1}
        </span>
      </div>
      <h3 className="text-xl text-white font-bold mb-2">{module.title}</h3>
      <ul className="space-y-2 mb-4">
        {module.topics.map((topic, i) => (
          <li key={i} className="text-slate-300 flex items-center">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
            {topic}
          </li>
        ))}
      </ul>
      <Button
        className={clsx('w-full', {
          'bg-gray-600 text-gray-400 cursor-not-allowed': isCompleted,
          'bg-blue-600 hover:bg-blue-700': !isCompleted,
        })}
        onClick={() => !isCompleted && onStart(module)}
        disabled={isCompleted}
      >
        {isCompleted ? 'Completed' : 'Start Module'}
      </Button>
    </div>
  );
};

export default ModuleCard;
