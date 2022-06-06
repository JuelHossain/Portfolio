import React from "react";

const ServicesCard = ({ sp, icon, title, text, rating, ...props }) => {
  return (
    <div
      {...props}
      className={`${sp} relative block p-8 hover:shadow-md shadow rounded-xl hover:bg-yellow-400 dark:hover:bg-red-500  dark:shadow-gray-700 dark:bg-gray-800 `}
    >
      <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
        {rating}
      </span>

      <div className="mt-4 sm:pr-8">
        {icon}

        <h5 className="mt-4 text-xl font-bold text-gray-900 dark:text-zinc-200 truncate">
          {title}
        </h5>

        <p className="hidden mt-2 text-sm sm:block">{text}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
