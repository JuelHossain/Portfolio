import {
  Link,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import useInfo from "../../../Hooks/useInfo";
export default function InfoPopup({ id }) {
  const { info: { insName, web, text } = {}, loading } = useInfo(id);
  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <Skeleton isLoaded={!loading} fadeDuration={1}>
          <Text className="text-md font-semibold mt-1 cursor-pointer">
            {insName}
          </Text>
        </Skeleton>
      </PopoverTrigger>
      <PopoverContent className="dark:bg-gray-700 ring-0 dark:border-gray-900">
        <PopoverHeader fontWeight="semibold" className="dark:border-b-gray-900">{insName}</PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody>
          <Stack>
            <Text>{text}</Text>
            {web && (
              <Link
                href={web}
                target="_blank"
                rel="noreferrer"
                className="text-right inline text-blue-500 "
              >
                Know More.
              </Link>
            )}
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
