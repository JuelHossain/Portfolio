import axios from "axios";
import { useCallback, useEffect, useReducer, useState } from "react";
const useAdmin = () => {
  // getting admin status
  const getStatus = useCallback(async (password) => {
    const res = await axios.get("http://localhost:5000/admin", {
      headers: password
        ? {
            secret: "true",
            password,
          }
        : { secret: "true" },
    });
    const status = res.data;
    return status;
  }, []);

  // setting admin status
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [update, refetch] = useReducer((x) => x + 1, 0);
  useEffect(() => {
    (async () => {
      try {
        const { admin } = await getStatus();
        setStatus(admin);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    })();
  }, [update,getStatus]);

  // updating admin status
  const updateStatus = async (status) => {
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
  return { status, loading, error, refetch, getStatus, updateStatus };
};

export default useAdmin;
