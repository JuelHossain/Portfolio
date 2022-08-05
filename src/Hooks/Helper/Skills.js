import axios from "axios";

export const getDevSkills = async () => {
  const { data } = await axios.get("/skills/development");
  return data;
};

export const getAutoSkills = async () => {
  const { data } = await axios.get("/skills/automation");
  return data;
};

export const getDesignSkills = async () => {
  const { data } = await axios.get("/skills/design");
  return data;
};

export const getComputerSkills = async () => {
  const { data } = await axios.get("/skills/computer");
  return data;
};
export const deleteSkill = async (id) => {
  const { data } = await axios.delete(`/skills/solo/${id}`);
  return data;
};
export const updateSkill = async (id, updatedSkill) => {
  const { data } = await axios.put(`/skills/solo/${id}`, updatedSkill);
  return data;
};
export const getSkill = async (id) => {
  const { data } = await axios.get(`/skills/solo/${id}`);
  return data;
};
export const createSkill = async (d) => {
  const { data } = await axios.post(`/skills`, d);
  return data;
};
