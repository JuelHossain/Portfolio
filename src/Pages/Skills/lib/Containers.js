import { VStack } from "@chakra-ui/react";

export const CardContainer = ({ children, ...props }) => {
  return (
    <VStack
      shadow={"md"}
      {...props}
      className=" justify-between items-start p-8  bg-zinc-50 dark:bg-gray-800 rounded-sm  group hover:bg-indigo-200 relative dark:shadow-gray-700 dark:hover:bg-gray-900"
    >
      {children}
    </VStack>
  );
};
