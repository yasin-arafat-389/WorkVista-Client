import { useContext } from "react";
import { authContext } from "../../src/Contexts/AuthContext";

const useAuth = () => {
  return useContext(authContext);
};

export default useAuth;
