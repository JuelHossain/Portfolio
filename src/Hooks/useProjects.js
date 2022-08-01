import axios from "axios";
import { useCallback, useEffect, useReducer, useState } from "react";

const useProjects = (singleId) => {
  const [update, refetch] = useReducer((x) => x + 1, 0);
  // creating project
  const createProject = async (newProject) => {
    const { data } = await axios.post(
      "http://localhost:5000/projects",
      newProject
    );
    return data;
  };
  // getting projects
  const getProjects = useCallback(async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/projects");
      return data;
    } catch (err) {
      return err;
    }
  }, []);
  // getting single project by id
  const getProject = useCallback(async (id) => {
    const { data } = await axios.get(`http://localhost:5000/projects/${id}`);
    return data;
  }, []);
  // updating project
  const updateProject = async (id, updatedData) => {
    const { data } = await axios.put(
      `http://localhost:5000/projects/${id}`,
      updatedData
    );
    return data;
  };
  // deleting project
  const deleteProject = async (id) => {
    const { data } = await axios.delete(`http://localhost:5000/projects/${id}`);
    return data;
  };

  // setting projects
  const [projects, setProjects] = useState([]);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [projectsError, setProjectsError] = useState(null);
  const [project, setProject] = useState({});
  const [projectLoading, setProjectLoading] = useState(true);
  const [projectError, setProjectError] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const data = await getProjects();
        setProjects(data);
        setProjectsLoading(false);
      } catch (err) {
        setProjectsError(err);
      }
    })();
  }, [getProjects, update]);
  useEffect(() => {
    (async () => {
      try {
        if (singleId) {
          const data = await getProject(singleId);
          setProject(data);
          setProjectLoading(false);
        }
      } catch (err) {
        setProjectError(err);
      }
    })();
  }, [getProject, update, singleId]);

  return {
    project,
    projectLoading,
    projectError,
    projects,
    projectsLoading,
    projectsError,
    refetch,
    getProjects,
    updateProject,
    deleteProject,
    createProject,
  };
};
export default useProjects;
