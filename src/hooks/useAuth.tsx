import React from "react";
import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "../../firebase";
import { User } from "../interfaces/user.interface";
import { saveData } from "../utils/dbFunctions";

export const useAuth = () => {
  const [error, setError] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const Login = (email: string, password: string) => {
    setLoading(true);

    if (email === "" || password === "") {
      setError("Por favor llena todos los campos");
      setLoading(false);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setLoading(false);
        auth.currentUser.uid;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError(errorCode);
        setLoading(false);
      });
  };

  const register = async (userData: User, password: string) => {
    setLoading(true);

    createUserWithEmailAndPassword(auth, userData.email, password)
      .then((userCredential) => {
        setLoading(false);
        saveData("users", {
          ...userData,
          userId: userCredential.user?.uid,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError(errorCode);
        setLoading(false);
      });
  };

  return { Login, error, loading, register };
};
