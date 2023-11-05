import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxios = () => {
  let { logOut, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          logOut()
            .then(() => {
              navigate("/login");
              toast.error("Something went wrong. Please login again");
            })
            .catch((error) => {
              console.log(error);
            });
          const userEmail = { email: user?.email };
          fetch("http://localhost:5000/clearCookie", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(userEmail),
          })
            .then((response) => response.json())
            .then()
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      }
    );
  }, [logOut, navigate, user?.email]);

  return axiosSecure;
};

export default useAxios;
