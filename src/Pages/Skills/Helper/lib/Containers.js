import { Box } from "@chakra-ui/react";

export const CardContainer = ({ children }) => {
  return (
    <Box className="flex flex-col justify-between p-8 transition-shadow bg-zinc-50 dark:bg-gray-800 rounded-sm shadow group hover:bg-indigo-200 relative dark:shadow-gray-700 dark:hover:bg-gray-900">
      {children}
    </Box>
  );
};
