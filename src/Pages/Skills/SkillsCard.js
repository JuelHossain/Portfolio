import { ExternalLinkIcon } from '@chakra-ui/icons';
import React from 'react';

const SkillsCard = ({title,text,icon}) => {
    return (
      <div
        class="flex flex-col justify-between p-8 transition-shadow bg-white rounded-sm shadow-xl group hover:shadow-lg"
      >
        <div>
                <h5 class="text-xl font-bold text-indigo-600">{title}</h5>
          <div class="pt-2 mt-4 border-t-2 border-indigo-100">
            <p class="text-xs font-medium tracking-widest text-gray-500 ">
              {text}
            </p>
          </div>
        </div>

        <div class="inline-flex items-center mt-6 gap-2 text-indigo-600">
          <p class="text-sm font-medium">How I Learned it?</p>
         <ExternalLinkIcon/>
        </div>
      </div>
    );
};

export default SkillsCard;