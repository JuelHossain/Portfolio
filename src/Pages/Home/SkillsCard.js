import React from 'react';

const SkillsCard = ({photo,icon,title,text}) => {
    return (
      <div
            class="relative block overflow-hidden bg-center bg-no-repeat bg-cover  rounded-xl"
            style={{ backgroundImage: `url(${photo})`}}
      >
        <span class="absolute z-10 inline-flex items-center px-3 py-1 text-3xl font-semibold text-white rounded-full  right-4 top-4">
         {icon}
        </span>

        <div class="relative p-8 pt-20 text-white bg-black bg-opacity-40">
                <h5 class="text-2xl font-bold">{title}</h5>

          <p class="text-sm">{text}</p>
        </div>
      </div>
    );
};

export default SkillsCard;