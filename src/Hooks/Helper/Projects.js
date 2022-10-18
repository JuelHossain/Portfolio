import axios from "axios";

export const createProject = async (newProject) => {
  const { data } = await axios.post("/projects", newProject);
  return data;
};

// getting projects
export const getProjects = async () => {
  const { data } = await axios.get("/projects");
  return data;
};

// getting single project by id
export const getProject = async (id) => {
  const { data } = await axios.get(`/projects/${id}`);
  return data;
};

// updating project
export const updateProject = async (id, updatedData) => {
  const { data } = await axios.put(`/projects/${id}`, updatedData);
  return data;
};

// deleting project
export const deleteProject = async (id) => {
  const { data } = await axios.delete(`/projects/${id}`);
  return data;
};
