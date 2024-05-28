import React, { useEffect } from "react";
import Logo from "../../assets/GymCheck_Logo__1_-removebg-preview 1.png";
import { auth } from "../../firebase.ts";
import { useAuth } from "../../hooks/useAuth.tsx";
const Perfil = () => {
  const { fetchUsers, users } = useAuth();

  useEffect(() => {
    fetchUsers();
  }, [users]);

  if (!users) return <div>Loading...</div>;

  return (
    <div>
      <div style={{ paddingLeft: "50px" }}>
        <img src={Logo} alt="" style={{ width: "200px", height: "200px" }} />
        <div className="flex flex-col gap-3 ">
          <label style={{ marginLeft: "50px" }} className="font-bold">
            Id
          </label>
          <label> {auth.currentUser?.uid}</label>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <label style={{ marginLeft: "50px" }} className="font-bold">
            Nombre completo
          </label>
          <label> {users?.fullName}</label>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <label style={{ marginLeft: "50px" }} className="font-bold">
            Fecha de nacimiento
          </label>
          <label> {users?.birthDate}</label>
        </div>
      </div>
      <button
        className="
      bg-purple-500
      "
        onClick={() => {
          window.location.href = "/menu";
        }}
      >
        <label>atras</label>
      </button>

      <div
        className="rounded-full bg-purple-200 -ml-12"
        style={{ width: "534px", height: "514px", marginTop: "500px" }}
      ></div>
    </div>
  );
};

export default Perfil;
