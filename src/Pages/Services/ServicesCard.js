import React from "react";

const ServicesCard = ({ sp, icon, title, text, rating, ...props }) => {
  return (
    <div
      {...props}
      className={`${sp} relative block p-8 border border-gray-100 hover:shadow-xl shadow rounded-xl hover:bg-yellow-400`}
    >
      <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
        {rating}
      </span>

      <div className="mt-4 text-gray-500 sm:pr-8">
        {icon}

        <h5 className="mt-4 text-xl font-bold text-gray-900 truncate">
          {title}
        </h5>

        <p className="hidden mt-2 text-sm sm:block">{text}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
