import axios from "axios";

export const verifyPassword = async (password) => {
  const { data } = await axios.get("http://localhost:5000/admin", {
    headers: {
      secret: "true",
      password,
    },
  });
  return data;
};
// getting admin status
export const getStatus = async () => {
  const { data } = await axios.get("http://localhost:5000/admin", {
    headers: { secret: "true" },
  });
  return data;
};

// updating admin status
export const updateStatus = async (status) => {
  const res = await fetch("http://localhost:5000/admin", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      secret: "true",
    },
    body: JSON.stringify({
      admin: status,
    }),
  });
  const data = await res.json();
  return data;
};
