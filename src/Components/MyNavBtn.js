import React from 'react';

const MyNavBtn = ({text,Children}) => {
    return (
      <button
        type="button"
        className="relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded dark:bg-gray-100 dark:text-gray-900"
      >
        {text}
        <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-400">
          New
        </span>
      </button>
    );
};

export default MyNavBtn;