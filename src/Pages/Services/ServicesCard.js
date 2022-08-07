import React from "react";

const ServicesCard = ({ sp, icon, title, text, rating, photo, ...props }) => {
  return (
    <div class="flex flex-col bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div class="basis-1/3">
        <img
          class="object-cover w-full h-full rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={photo}
          alt=""
        />
      </div>
      <div class="flex flex-col p-8 leading-normal basis-2/3 justify-between gap-3">
        <div>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
