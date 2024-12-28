import React from 'react';

const TopicList = ({ topics }) => {
  return (
    <ul className="space-y-2">
      {topics.map((topic, i) => (
        <li key={i} className="text-slate-300 flex items-center">
          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
          {topic}
        </li>
      ))}
    </ul>
  );
};

export default TopicList;

