import React from 'react';

const ServicesCard = ({icon,title,text,rating}) => {
    return (
      <div
        class="relative block p-8 border border-gray-100 hover:shadow-xl shadow rounded-xl"

      >
        <span class="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
          {rating}
        </span>

        <div class="mt-4 text-gray-500 sm:pr-8">
          {icon}

          <h5 class="mt-4 text-xl font-bold text-gray-900 truncate">
           {title}
          </h5>

          <p class="hidden mt-2 text-sm sm:block">
           {text}
          </p>
        </div>
      </div>
    );
};

export default ServicesCard;