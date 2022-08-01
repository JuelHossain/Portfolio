import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import useAdmin from "../Hooks/useAdmin";

const Logout = () => {
    const { updateStatus,refetch } = useAdmin();
  return (
    <button
          key={"asdl;fj"}
          onClick={
              async () => {
                  await updateStatus(false);
                  refetch();
              }
          }
      className={
        "hover:bg-yellow-400 shadow hover:shadow-md font-bold px-3 py-1 dark:text-zinc-50 dark:hover:text-zinc-900 dark:bg-gray-700 dark:shadow-gray-700 dark:hover:bg-yellow-400 flex items-center gap-2"
      }
    >
      {<AiOutlineLogout className="md:hidden"/>}
      <p className="text-[8px] sm:text-sm">{"LogOut"}</p>
    </button>
  );
};

export default Logout;
