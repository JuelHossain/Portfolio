import axios from "axios";

export const getEducations = async () => {
  const { data } = await axios.get("http://localhost:5000/about/educations");
  return data;
};
export const getCourses = async () => {
  const { data } = await axios.get("http://localhost:5000/about/courses");
  return data;
};
export const getExperiences = async () => {
  const { data } = await axios.get("http://localhost:5000/about/experiences");
  return data;
};
export const createInfo = async (d) => {
  const { data } = await axios.get("http://localhost:5000/about", d);
  return data;
};

export const getInfo = async (id) => {
  const { data } = await axios.get(`http://localhost:5000/about/solo/${id}`);
  return data;
};
export const updateInfo = async (id, d) => {
  const { data } = await axios.put(`http://localhost:5000/about/solo/${id}`, d);
  return data;
};
export const deleteInfo = async (id) => {
  const { data } = await axios.delete(`http://localhost:5000/about/solo/${id}`);
  return data;
};
