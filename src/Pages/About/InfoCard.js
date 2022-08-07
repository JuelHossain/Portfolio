import { IconButton } from "@chakra-ui/react";
import { FaGraduationCap } from "react-icons/fa";
import useAdmin from "../../Hooks/useAdmin";
import useInfo from "../../Hooks/useInfo";
import AdminControl from "./Helper/AdminControl";
import InfoCardSkeleton from "./Helper/InfoCardSkeleteon";
import InfoPopup from "./Helper/InfoPopup";

const InfoCard = ({ id, refresh }) => {
  const { info: { title, grade, duration, cat } = {}, loading } = useInfo(id);
  const { status } = useAdmin();

  if (loading) {
    return <InfoCardSkeleton />;
  }
  return (
    <div className="flex items-start relative ">
      <div className="flex flex-col items-center gap-2">
        {status ? (
          <AdminControl id={id} cat={cat} refresh={refresh} />
        ) : (
          <IconButton
            className="dark:bg-gray-900/10 dark:text-bg-gray-200 ring-0 dark:hover:bg-gray-900/50"
            icon={<FaGraduationCap className="text-xl" />}
          />
        )}
      </div>

      <div className="ml-4 w-full">
        <h2 className="text-lg font-bold">{title}</h2>
        <hr className="border-red-300" />
        <InfoPopup id={id} />
        <p className="mt-1 text-sm ">{grade}</p>
        <p className="mt-1 text-sm ">{duration}</p>
      </div>
    </div>
  );
};

export default InfoCard;
