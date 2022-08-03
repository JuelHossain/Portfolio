import {
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  Heading,
} from "@chakra-ui/react";

import React from "react";
export function UpdateInputs({ name, label, value, register, link, ...props }) {
  return (
    <Heading
      {...props}
      className="flex gap-2 items-center overflow-hidden py-1"
    >
      {link && <p className={link && "whitespace-nowrap"}>{label}</p>}
      <Editable defaultValue={value} className={link && "w-full"}>
        <EditablePreview className={link && "whitespace-nowrap"} />
        <EditableInput {...register(name)} className="p-1" />
      </Editable>
    </Heading>
  );
}

export function UpdateName({ value, register }) {
  return (
    <UpdateInputs size={"md"} name={"name"} value={value} register={register} />
  );
}
export function UpdateTitle({ value, register }) {
  return (
    <UpdateInputs
      size={"sm"}
      name={"title"}
      value={value}
      register={register}
    />
  );
}
export function UpdateAbout({ value, register }) {
  return (
    <Editable defaultValue={value}>
      <EditablePreview className="md:h-36 overflow-hidden" />
      <EditableTextarea className="md:h-36 " {...register("about")} />
    </Editable>
  );
}
export function UpdateGit({ value, register }) {
  return (
    <UpdateInputs
      link
      label="Git:"
      size={"sm"}
      name={"git"}
      value={value}
      register={register}
    />
  );
}
export function UpdateServerGit({ value, register }) {
  return (
    <UpdateInputs
      link
      label="Server Git:"
      size={"sm"}
      name={"serverGit"}
      value={value}
      register={register}
    />
  );
}
export function UpdateLiveSite({ value, register }) {
  return (
    <UpdateInputs
      link
      label="Live Site:"
      size={"sm"}
      name={"liveSite"}
      value={value}
      register={register}
    />
  );
}
