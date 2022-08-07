import { Badge, FormControl, Input, Textarea, Tooltip } from "@chakra-ui/react";
export const TitleInput = ({ err, reg, value }) => {
  return (
    <FormControl>
      <Tooltip
        isOpen={err?.title}
        label={err?.title?.message}
        hasArrow
        placement={"top-end"}
        bg="red.600"
        className="capitalize"
      >
        <Input
          {...reg("title", {
            required: `Title is required`,
          })}
          placeholder={"Title"}
          defaultValue={value}
          className="text-xl font-bold text-indigo-600 dark:text-violet-500 truncate border"
        />
      </Tooltip>
    </FormControl>
  );
};
export const AboutInput = ({ err, reg, value }) => {
  return (
    <FormControl>
      <Tooltip
        isOpen={err?.about}
        label={err?.about?.message}
        hasArrow
        placement="top-end"
        bg="red.600"
        className="capitalize"
      >
        <Textarea
          {...reg("about", { required: "About Cannot be empty" })}
          placeholder={"About The Skill"}
          defaultValue={value}
          className="text-xs font-medium tracking-widest text-gray-500 resize-none"
        />
      </Tooltip>
    </FormControl>
  );
};
export const Tag = ({ err, reg, value }) => {
  return (
    <Tooltip
      isOpen={err?.tag}
      label={err?.tag?.message}
      hasArrow
      placement="top-end"
      bg="red.600"
      className="capitalize"
    >
      <Badge
        {...reg("tag", { required: "Tag Cannot be empty" })}
        as={"input"}
        variant="solid"
        colorScheme="green"
        defaultValue={value}
        placeholder="Tag"
        className="absolute right-10 top-0 focus:outline-none focus:ring-1 w-28 "
      />
    </Tooltip>
  );
};
