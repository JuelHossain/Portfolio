import React from "react";

const ServicesCard = ({ sp, icon, title, text, rating, photo, ...props }) => {
  return (
    <div
      class={`${sp} flex flex-col rounded-lg border shadow-md  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-8 gap-1`}
    >
      <p className="text-3xl">{icon}</p>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{text}</p>
    </div>
  );
};

export default ServicesCard;
