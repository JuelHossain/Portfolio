import { FormControl, Input, Textarea, Tooltip } from "@chakra-ui/react";

export function CreateInputs({ register, error, name, place }) {
  return (
    <FormControl>
      <Tooltip
        label={error?.[name]?.message}
        isOpen={error[name]}
        hasArrow
        placement="top-end"
        bg="red.600"
        className="capitalize"
      >
        <Input
          className="capitalize"
          placeholder={place}
          {...register(name, {
            required: `${name} is required`,
          })}
        />
      </Tooltip>
    </FormControl>
  );
}
export function NameInput({ register, error }) {
  return (
    <CreateInputs
      register={register}
      error={error}
      name={"name"}
      place={"Project Name"}
    />
  );
}
export function TitleInput({ register, error }) {
  return (
    <CreateInputs
      register={register}
      error={error}
      name={"title"}
      place={"project Title ( should be long )"}
    />
  );
}
export function AboutInput({ register, error }) {
  return (
    <FormControl>
      <Tooltip
        label={error?.about?.message}
        isOpen={error.about}
        hasArrow
        placement="top-end"
        bg="red.600"
        className="capitalize"
      >
        <Textarea
          className="resize-none h-32"
          placeholder="About the project ( should be long )"
          {...register("about", {
            required: "about is required",
          })}
        />
      </Tooltip>
    </FormControl>
  );
}
export function GitInput({ register, error }) {
  return (
    <CreateInputs
      register={register}
      error={error}
      name={"git"}
      place={"git hub link"}
    />
  );
}
export function ServerGitInput({ register, error }) {
  return (
    <CreateInputs
      register={register}
      error={error}
      name={"serverGit"}
      place={"git hub link for server"}
    />
  );
}
export function LiveSiteInput({ register, error }) {
  return (
    <CreateInputs
      register={register}
      error={error}
      name={"liveSite"}
      place={"live site link "}
    />
  );
}
