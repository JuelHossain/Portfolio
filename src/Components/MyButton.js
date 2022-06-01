import React from 'react';

const MyButton = ({text,link,icon}) => {
    return (
      <a
        className="relative inline-block group focus:outline-none focus:ring"
        href={link}
      >
        <span className="absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-yellow-300 group-hover:translate-y-0 group-hover:translate-x-0"></span>

        <span className="relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-black uppercase border-2 border-current group-active:text-opacity-75">
          {text}{icon}
        </span>
      </a>
    );
};

export default MyButton;