import {
  Center,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
} from "@chakra-ui/react";
import Loading from "../../../Components/Loading";
import useInfo from "../../../Hooks/useInfo";
export default function InfoPopup({ id }) {
  const { info: { insName, web, text } = {}, loading } = useInfo(id);
  if (loading) {
    return (
      <Center className="relative">
        <Loading />
      </Center>
    );
  }
  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <Text className="text-md font-semibold mt-1 cursor-pointer">
          {insName}
        </Text>
      </PopoverTrigger>
      <PopoverContent className="dark:bg-gray-200">
        <PopoverHeader fontWeight="semibold">{insName}</PopoverHeader>
        <PopoverArrow />
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
