import axios from "axios";

export const createProject = async (newProject) => {
  const { data } = await axios.post(
    "http://localhost:5000/projects",
    newProject
  );
  return data;
};

// getting projects
export const getProjects = async () => {
  const { data } = await axios.get("http://localhost:5000/projects");
  return data;
};

// getting single project by id
export const getProject = async (id) => {
  const { data } = await axios.get(`http://localhost:5000/projects/${id}`);
  return data;
};

// updating project
export const updateProject = async (id, updatedData) => {
  const { data } = await axios.put(
    `http://localhost:5000/projects/${id}`,
    updatedData
  );
  return data;
};

// deleting project
export const deleteProject = async (id) => {
  const { data } = await axios.delete(`http://localhost:5000/projects/${id}`);
  return data;
};
