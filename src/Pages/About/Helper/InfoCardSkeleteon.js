import { Box, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
export default function InfoCardSkeleton() {
  return (
    <Box className="flex gap-2 items-start">
      <SkeletonCircle size={6} className="flex-shrink-0" />
      <Box className="w-full space-y-2">
        <Skeleton className="h-4 w-36" />
        <Skeleton className="h-0.5 w-full" />
        <Skeleton className="h-3 w-60" />
        <SkeletonText noOfLines={4} spacing="1" className="w-full" />
        <Skeleton className="h-3 w-28" />
      </Box>
    </Box>
  );
}
