import { Center, Heading, Icon, VStack } from "@chakra-ui/react";
import { BiPlusCircle } from "react-icons/bi";
function CreateButton({ setCreate, cat }) {
  return (
    <Center
      className="hover:bg-indigo-200 flex-col gap-3"
      shadow={"md"}
      p={10}
      onClick={() => setCreate(true)}
    >
      <Icon as={BiPlusCircle} w={20} h={20} className={"text-indigo-600"} />
      <Heading className="text-center capitalize" size={"sm"}>
        Create a {cat} Skill
      </Heading>
    </Center>
  );
}

export default CreateButton;
