import { onAuthStateChanged } from "firebase/auth";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../firebase.ts";
import { useState } from "react";
import React from "react";

const PrivateRoute = () => {
  const user = localStorage.getItem("user");

  return (
    <>
      {user === "true" ? (
        <div>
          <Outlet />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoute;
