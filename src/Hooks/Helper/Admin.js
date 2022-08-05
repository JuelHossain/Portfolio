import axios from "axios";

export const verifyPassword = async (password) => {
  const { data } = await axios.get("/admin", {
    headers: {
      secret: "true",
      password,
    },
  });
  return data;
};
// getting admin status
export const getStatus = async () => {
  const { data } = await axios.get("/admin", {
    headers: { secret: "true" },
  });
  return data;
};

// updating admin status
export const updateStatus = async (status) => {
  const data = await axios.put(
    "http://localhost:5000/admin",
    {
      admin: status,
    },
    {
      headers: { secret: "true" },
    }
  );
  return data;
};
