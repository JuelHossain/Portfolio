import {
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiTwotoneMail } from "react-icons/ai";
import { BsFileEarmarkPerson } from "react-icons/bs";

const Form = () => {
  // react hook form
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  // on submit handle
  function onSubmit(v, e) {
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    console.info(serviceId, templateId, publicKey);
    setTimeout(() => {
      emailjs.sendForm(serviceId, templateId, e.target, publicKey);
    }, 1000);
    toast.success(
      () => (
        <span>
          <strong className="text-sm font-medium">
            {" "}
            Your Message has been sent.
          </strong>

          <p className="mt-1 text-xs">
            I Will Reply You Back as Soon As Possible.
          </p>
        </span>
      ),
      { duration: 4000 }
    );
  }
  return (
    <div className=" sm:w-1/2 dark:shadow-gray-700 flex flex-col md:ml-auto w-full  mt-8 md:mt-0 shadow-md p-2 rounded-lg bg-zinc-50 dark:bg-gray-800">
      <Heading size={"md"}>Contact Me</Heading>
      <Divider className="border-yellow-400 dark:border-red-500 my-1" />
      <Text className="leading-relaxed mb-5 ">
        Please Send Me a Written Message here,
      </Text>

      <Stack as={"form"} onSubmit={handleSubmit(onSubmit)} spacing={4}>
        <FormControl isInvalid={errors.name}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children={<BsFileEarmarkPerson />}
            />
            <Input
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name is Not Valid",
                },
              })}
              placeholder="Name"
            />
          </InputGroup>
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.email}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color={"gray.300"}
              children={<AiTwotoneMail />}
            />
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Email Is Not Valid",
                },
              })}
              placeholder="Email"
            />
          </InputGroup>
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.text}>
          <Textarea
            {...register("text", {
              required: "You Cannot send a blank message",
            })}
            placeholder="Type Your Message Here."
            size="sm"
            resize={"vertical"}
          />
          <FormErrorMessage>
            {errors.email && errors.text.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          isLoading={isSubmitting}
          type="submit"
          className="bg-yellow-400 dark:bg-red-500 hover:bg-sky-500 hover:text-white"
        >
          Send
        </Button>
      </Stack>
    </div>
  );
};

export default Form;
