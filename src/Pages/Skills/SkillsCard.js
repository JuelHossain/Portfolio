import { Skeleton, SkeletonText } from "@chakra-ui/react";
import React, { useState } from "react";
import useSkill from "../../Hooks/useSkill";
import useAdmin from "./../../Hooks/useAdmin";
import { CardContainer } from "./lib/Containers";
import { AdminControl, Tag, TextContent } from "./lib/Element";
import UpdateCard from "./Update/UpdateCard";

const SkillsCard = ({ id, refetch }) => {
  const { status } = useAdmin();
  const [edit, setEdit] = useState(false);
  const {
    skill: { title, about, tag } = {},
    skillLoading,
    refetch: refetchSkill,
  } = useSkill(id);

  if (skillLoading) {
    return (
      <div className="p-8 space-y-2 bg-gray-200 dark:bg-gray-700 relative">
        <Skeleton className="h-4 w-36" />
        <hr className="border-slate-300" />
        <SkeletonText />
      </div>
    );
  }
  if (edit && status) {
    return <UpdateCard setEdit={setEdit} id={id} update={refetchSkill} />;
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
