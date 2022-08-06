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
  await axios.put(
    "/admin",
    {
      admin: status,
    },
    {
      headers: { secret: "true" },
    }
  );
};
