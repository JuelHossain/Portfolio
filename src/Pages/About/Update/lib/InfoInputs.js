import { FormControl, Input, Textarea, Tooltip } from "@chakra-ui/react";

export const InfoInput = ({ name, err, reg, value, size, label, ...props }) => {
  return (
    <FormControl className="w-full">
      <label>{label}:</label>
      <Tooltip
        isOpen={err?.[name]}
        label={err?.[name]?.message}
        hasArrow
        placement={"top-end"}
        bg={err[name] ? "red.600" : "green.500"}
        className="capitalize"
      >
        <Input
          {...props}
          {...reg(name, {
            required: `${name} is required`,
          })}
          placeholder={label}
          defaultValue={value}
          className={`${size} border capitalize`}
        />
      </Tooltip>
    </FormControl>
  );
};

export const TitleInput = ({ err, reg, value }) => {
  return (
    <InfoInput
      err={err}
      reg={reg}
      value={value}
      name="title"
      label="Field Title"
    />
  );
};
export const InsNameInput = ({ err, reg, value }) => {
  return (
    <InfoInput
      err={err}
      reg={reg}
      value={value}
      name="insName"
      label={"Institute Name"}
    />
  );
};
export const DetailInput = ({ err, reg, value }) => {
  return (
    <InfoInput
      err={err}
      reg={reg}
      value={value}
      name="grade"
      label={"Detail Information"}
      as={Textarea}
      size={"resize-none p-2"}
    />
  );
};

export const DurationInput = ({ err, reg, value }) => {
  return (
    <InfoInput
      err={err}
      reg={reg}
      value={value}
      name="duration"
      label={"Duration"}
    />
  );
};
export const WebInput = ({ err, reg, value }) => {
  return (
    <InfoInput
      err={err}
      reg={reg}
      value={value}
      name="web"
      label={"Web Address"}
    />
  );
};
export const TextInput = ({ err, reg, value }) => {
  return (
    <InfoInput
      err={err}
      reg={reg}
      value={value}
      name="text"
      label={"About the org"}
      as={Textarea}
      size={"resize-none p-2"}
    />
  );
};
