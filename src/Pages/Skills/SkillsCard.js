import React, { useState } from "react";
import useAdmin from "./../../Hooks/useAdmin";
import { CardContainer } from "./lib/Containers";
import { AdminControl, Tag, TextContent } from "./lib/Element";
import UpdateCard from "./Update/UpdateCard";

const SkillsCard = ({ id, title, about, icon, tag, refetch }) => {
  const { status } = useAdmin();
  console.log(status);
  const [edit, setEdit] = useState(false);

  if (edit && status) {
    return <UpdateCard setEdit={setEdit} id={id} update={refetch} />;
  }
  return (
    <CardContainer>
      <TextContent title={title} about={about} />
      <Tag tag={tag} />
      {status && <AdminControl id={id} setEdit={setEdit} refetch={refetch} />}
    </CardContainer>
  );
};

export default SkillsCard;
