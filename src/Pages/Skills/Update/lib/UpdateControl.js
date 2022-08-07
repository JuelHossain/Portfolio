import { CloseIcon } from "@chakra-ui/icons";
import { Button, Flex, IconButton } from "@chakra-ui/react";

const UpdateControl = ({ close, reset, exec, name }) => {
  return (
    <Flex gap={2}>
      <Button size={"sm"} onClick={exec} className="dark:bg-gray-500">
        {name}
      </Button>
      <IconButton
        className="dark:bg-gray-500"
        size={"sm"}
        icon={<CloseIcon w={3} />}
        onClick={() => {
          close(false);
          reset();
        }}
      />
    </Flex>
  );
};

export default UpdateControl;
