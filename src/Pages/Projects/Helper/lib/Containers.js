import { Box } from "@chakra-ui/react";

export function PContainer({ children, h = "md:h-[450px]" }) {
  return (
    <Box
      className={`rounded relative  shadow dark:bg-gray-800 flex border flex-col md:flex-row dark:text-white  dark:border-gray-700 ${h}`}
    >
      {children}
    </Box>
  );
}
export function TextContainer({ children }) {
  return (
    <Box className="  border-l dark:border-gray-700 md:w-1/2 md:p-8 p-4 justify-between flex flex-col relative gap-5 bg-white dark:bg-gray-800">
      {children}
    </Box>
  );
}
export function ImageContainer({ children }) {
  return (
    <Box className=" rounded-l md:h-full overflow-hidden md:w-1/2 h-44 sm:h-80 relative">
      {children}
    </Box>
  );
}
