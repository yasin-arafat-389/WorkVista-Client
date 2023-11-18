import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "./useAuth";
let flag = true;
const axiosSecure = axios.create({
  baseURL: "https://work-vista-server.vercel.app",
  withCredentials: true,
});

const useAxios = () => {
  let { logOut } = useAuth();

  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token-from-workvista");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        await logOut();
        if (flag) {
          toast.error("Something went wrong. Please Login Again");
          flag = false;
        }
      }

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxios;
