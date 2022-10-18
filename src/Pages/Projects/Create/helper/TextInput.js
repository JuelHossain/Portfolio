import { VStack } from "@chakra-ui/react";
import React from "react";
import { TextContainer } from "../../Helper/lib/Containers";

import {
  AboutInput,
  GitInput,
  LiveSiteInput,
  NameInput,
  ServerGitInput,
  TitleInput,
} from "../lib/CreateInputs";

const TextInput = ({ register, error }) => {
  return (
    <TextContainer>
      <VStack className="items-stretch gap-1">
        <NameInput register={register} error={error} />
        <TitleInput register={register} error={error} />
        <AboutInput register={register} error={error} />
        <GitInput register={register} error={error} />
        <ServerGitInput register={register} error={error} />
        <LiveSiteInput register={register} error={error} />
      </VStack>
    </TextContainer>
  );
};

export default TextInput;
