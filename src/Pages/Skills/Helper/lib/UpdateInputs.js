import { FormControl, Input, Tooltip } from "@chakra-ui/react";
export const UpdateInput = ({ err, reg, name, value, errorP }) => {
  return (
    <FormControl>
      <Tooltip
        isOpen={err?.[name]}
        label={err?.[name]?.message}
        hasArrow
        placement={errorP}
        bg="red.600"
        className="capitalize"
      >
        <Input
          {...reg(name, {
            required: `${name} is required`,
          })}
          placeholder={name}
          defaultValue={value}
          className="text-xl font-bold text-indigo-600 dark:text-violet-500 truncate border-none"
        />
      </Tooltip>
    </FormControl>
  );
};
