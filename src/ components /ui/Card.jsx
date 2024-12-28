import React from 'react';
import { clsx } from 'clsx';

const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx(
        'bg-slate-800 border border-slate-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-transform hover:scale-105',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
