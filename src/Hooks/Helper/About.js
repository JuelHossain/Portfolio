import axios from "axios";

export const getEducations = async () => {
  const { data } = await axios.get("/about/educations");
  return data;
};
export const getCourses = async () => {
  const { data } = await axios.get("/about/courses");
  return data;
};
export const getExperiences = async () => {
  const { data } = await axios.get("/about/experiences");
  return data;
};
export const createInfo = async (d) => {
  const { data } = await axios.post("about", d);
  return data;
};

export const getInfo = async (id) => {
  const { data } = await axios.get(`/about/solo/${id}`);
  return data;
};
export const updateInfo = async (id, d) => {
  const { data } = await axios.put(`/about/solo/${id}`, d);
  return data;
};
export const deleteInfo = async (id) => {
  const { data } = await axios.delete(`/about/solo/${id}`);
  return data;
};
