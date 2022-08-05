import { useQuery } from "@tanstack/react-query";
import { getInfo } from "./Helper/About";

const useInfo = (id) => {
  const {
    data: info,
    isLoading: loading,
    refetch,
    error,
  } = useQuery(["info", id], async () => getInfo(id));
  return { info, loading, refetch, error };
};

export default useInfo;
