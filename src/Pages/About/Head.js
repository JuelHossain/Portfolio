import { VStack } from '@chakra-ui/react';
import React from 'react';
import me from '../../assets/me.png'
const Head = () => {
    return (
      <div class="max-w-5xl  py-8 mx-auto">
        <section class="p-8 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
            <div class="relative">
              <div class="aspect-w-1 aspect-h-1">
                <img
                  src={me}
                  alt=""
                  class="object-cover object-top rounded-lg"
                />
              </div>

              <div class="absolute inline-flex px-4 py-2 bg-zinc-50 dark:bg-gray-900  rounded-lg shadow-xl -bottom-4 -right-4 ">
                <span class=" flex justify-center items-center w-12 h-10 bg-zinc-50 dark:bg-gray-700 rounded-lg text-xl font-bold  ">
                  Hi,
                </span>
              </div>
            </div>

            <blockquote class="sm:col-span-2">
              <p class="text-xl font-medium sm:text-2xl ">
                So, You Want to Know About me.? Alright Then,
              </p>

              <VStack alignItems={"start"}>
                <cite class="inline-flex items-center mt-8  not-italic">
                  <span class="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                  <p class="text-sm text-gray-500 uppercase sm:ml-3">
                    <strong>I am from </strong>, Dhaka, Bangladesh.
                  </p>
                </cite>
                <cite class="inline-flex items-center not-italic">
                  <span class="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                  <p class="text-sm text-gray-500 uppercase sm:ml-3">
                    <strong>My Date Of Birth</strong>, 06 March 1999.
                  </p>
                </cite>
              </VStack>
            </blockquote>
          </div>
        </section>
      </div>
    );
};

export default Head;