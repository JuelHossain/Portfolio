import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { createSkill } from "../../../Hooks/Helper/Skills";
import { CardContainer } from "../lib/Containers";
import { AboutInput, Tag, TitleInput } from "../Update/lib/UpdateInputs";
import CreateButton from "./lib/CreateButton";

const CreateCard = ({ cat, refresh }) => {
  const [create, setCreate] = useState(false);
  // hook form
  const {
    register,
    handleSubmit,
    formState: { errors: err },
    reset,
  } = useForm();

  // submit functions
  const submit = (e) => {
    e.preventDefault();
    handleSubmit(async (d) => {
      try {
        const data = await createSkill({ ...d, cat });
        console.log(data);
        if (data._id) {
          reset();
          refresh();
          setCreate(false);
          toast.success(`${d.title} Created Successfully`);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  };

  if (!create) {
    return <CreateButton setCreate={setCreate} cat={cat} />;
  }
  return (
    <CardContainer as={"form"} onSubmit={submit} alignItems={"stretch"}>
      <TitleInput err={err} reg={register} />
      <AboutInput err={err} reg={register} />
      <Tag err={err} reg={register} />
      <Button size={"sm"} type="submit">
        Create
      </Button>
    </CardContainer>
  );
};

export default CreateCard;
