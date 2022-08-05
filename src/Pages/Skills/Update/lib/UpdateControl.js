import { CloseIcon } from "@chakra-ui/icons";
import { Button, Flex, IconButton } from "@chakra-ui/react";

const UpdateControl = ({setEdit, reset, exec}) => {
  return (
    <Flex gap={2}>
      <Button size={"sm"} onClick={exec}>
        Update
      </Button>
      <IconButton
        size={"sm"}
        icon={<CloseIcon w={3} />}
        onClick={() => {
          setEdit(false);
          reset();
        }}
      />
    </Flex>
  );
};

export default UpdateControl;
