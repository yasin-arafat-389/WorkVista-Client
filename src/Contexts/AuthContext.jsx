/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.config";
import axios from "axios";

export const authContext = createContext();

const AuthContext = ({ children }) => {
  const provider = new GoogleAuthProvider();

  // Hooks
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [awaitForToken, setAwaitForToken] = useState(false);

  let createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  let login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  let googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  let update = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  let logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);

      if (user) {
        const userEmail = { email: user.email };
        axios
          .post("https://work-vista-server.vercel.app/access-token", userEmail)
          .then((res) => {
            if (res.data.token) {
              localStorage.setItem(
                "access-token-from-workvista",
                res.data.token
              );
            }
            setAwaitForToken(res.data.token);
          });
      } else {
        localStorage.removeItem("access-token-from-workvista");
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  let authInfo = {
    createUser,
    logOut,
    login,
    update,
    googleLogin,
    loading,
    user,
    awaitForToken,
    setAwaitForToken,
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthContext;
