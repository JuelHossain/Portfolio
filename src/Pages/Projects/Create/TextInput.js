import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const TextInput = ({ register, error, handleSubmit, submit }) => {
  return (
    <Box className=" rounded shadow md:w-1/2 md:p-8 p-4 justify-between gap-5 flex flex-col">
      <VStack className="items-stretch gap-1">
        <FormControl>
          <Input
            placeholder="Project Name"
            {...register("name", {
              required: "name is required",
            })}
          />
          {error.name && (
            <FormErrorMessage>{error.name.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl>
          <Input
            placeholder="Project Title ( should be long )"
            {...register("title", {
              required: "title is required",
            })}
          />
          {error.title && (
            <FormErrorMessage>{error.title.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl>
          <Textarea
            className="resize-none h-32"
            placeholder="About the project ( should be long )"
            {...register("about", {
              required: "about is required",
            })}
          />
          {error.about && (
            <FormErrorMessage>{error.about.message}</FormErrorMessage>
          )}
        </FormControl>
      </VStack>
      <Divider />
      <VStack>
        <FormControl>
          <Input
            placeholder="Git Hub Link "
            {...register("git", {
              required: "git hub link is required",
            })}
          />
          {error.git && (
            <FormErrorMessage>{error.git.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl>
          <Input
            placeholder="Live Site Link "
            {...register("liveSite", {
              required: "Live Site link is required",
            })}
          />
          {error.liveSite && (
            <FormErrorMessage>{error.liveSite.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl>
          <Input
            placeholder="Server Git Hub Link "
            {...register("serverGit", {
              required: "server github link is required",
            })}
          />
          {error.serverGit && (
            <FormErrorMessage>{error.serverGit.message}</FormErrorMessage>
          )}
        </FormControl>
        <Button className="w-full" onClick={handleSubmit(submit)}>
          Create Project
        </Button>
      </VStack>
    </Box>
  );
};

export default TextInput;
