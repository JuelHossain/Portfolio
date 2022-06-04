import React from 'react';

const Educard = ( {instName,title,grade,duration}) => {
    return (
      <div class="flex items-start ">
        <span class="flex-shrink-0 p-4 bg-gray-100 rounded-lg">
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        </span>

        <div class="ml-4">
                <h2 class="text-lg font-bold">{title}</h2>
                <hr className='border-red-300'/>
          <h3 class="text-md font-semibold mt-1">{instName}</h3>

          <p class="mt-1 text-sm text-gray-700">
            {grade}
          </p>
          <p class="mt-1 text-sm text-gray-700">
            {duration}
          </p>
        </div>
      </div>
    );
};

export default Educard;