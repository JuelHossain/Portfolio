import { useQuery } from "@tanstack/react-query";
import { getProjects } from "./Helper/Projects";
const useProjects = (singleId) => {
  // getting projects
  const {
    data,
    isLoading: projectsLoading,
    error: projectsError,
    refetch,
  } = useQuery(["projects"], getProjects);
  // getting project
  const projects = data ? [...data].reverse() : [];
  return {
    projects,
    projectsLoading,
    projectsError,
    refetch,
  };
};
export default useProjects;
