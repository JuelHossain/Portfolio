import { useQuery } from "@tanstack/react-query";
import { getStatus } from "./Helper/Admin";
const useAdmin = () => {
  const {
    data: { admin: status } = {},
    isLoading: loading,
    error,
    refetch,
  } = useQuery(["status"], getStatus);

  return { status, loading, error, refetch };
};

export default useAdmin;
