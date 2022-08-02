import { Box } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import ImageContent from "../Update/ImageContent";
import TextInput from "./TextInput";

const CreateProject = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const submit = async (data) => {
    console.log(data);
  };
  return (
    <Box>
      <Box className=" rounded relative  dark:bg-gray-800 flex md:h-[500px] shadow-md border flex-col md:flex-row dark:text-white">
        <ImageContent register={register} watch={watch} />
        <TextInput
          register={register}
          error={errors}
          handleSubmit={handleSubmit}
          submit={submit}
        />
      </Box>
    </Box>
  );
};

export default CreateProject;
