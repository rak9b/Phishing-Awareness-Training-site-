import React from 'react';
import { clsx } from 'clsx';

const Button = ({ children, className, disabled = false, ...props }) => {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded-lg font-medium text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500',
        {
          'bg-blue-600 text-white hover:bg-blue-700': !disabled,
          'bg-gray-600 text-gray-400 cursor-not-allowed': disabled,
        },
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
