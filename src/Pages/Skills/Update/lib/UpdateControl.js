import { CloseIcon } from "@chakra-ui/icons";
import { Button, Flex, IconButton } from "@chakra-ui/react";

const UpdateControl = (submit, setEdit, reset, handleSubmit) => {
  return (
    <Flex gap={2}>
      <Button size={"sm"} onClick={handleSubmit(submit)}>
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
