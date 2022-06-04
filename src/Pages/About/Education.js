import { Container } from '@chakra-ui/react';
import React from 'react';
import Educard from './Educard';

const Education = ({edu,name,title}) => {

    return (
      <Container maxW='container.lg' class="text-gray-900 bg-gray-200 rounded-lg mb-8">
        <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="max-w-xl">
            <h2 class="text-3xl font-bold ">
              {name}
            </h2>

            <p class="mt-4 text-gray-700">
                       {title}
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 mt-8 md:gap-12 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
                    {edu?.sort().map(ed => {
                        const { insName, title, grade, duration } = ed ?? {};
                        return <Educard instName={insName} title={title} grade={grade} duration={duration}/>
            })}
          </div>
        </div>
      </Container>
    );
};

export default Education;