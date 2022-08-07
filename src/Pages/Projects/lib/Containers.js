import { Box } from "@chakra-ui/react";

export function PContainer({ children, h = "md:h-[450px]" }) {
  return (
    <Box
      className={`rounded relative  dark:bg-gray-800 flex  shadow-md border flex-col md:flex-row dark:text-white dark:shadow-gray-800 dark:border-gray-700 ${h}`}
    >
      {children}
    </Box>
  );
}
export function TextContainer({ children }) {
  return (
    <Box className=" rounded shadow md:w-1/2 md:p-8 p-4 justify-between flex flex-col relative">
      {children}
    </Box>
  );
}
export function ImageContainer({ children }) {
  return (
    <Box className=" rounded-l md:h-full overflow-hidden md:w-1/2 h-60 sm:h-80 relative">
      {children}
    </Box>
  );
}
