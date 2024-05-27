import React, { useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import Logo from "../../assets/GymCheck_Logo__1_-removebg-preview 1.png";
import { useLocation } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  doc,
  collection,
  db,
  setDoc,
  auth,
} from "../../firebase.ts";

const Registro2 = () => {
  const location = useLocation();
  console.log(location.state);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    createUserWithEmailAndPassword(auth, formData.username, formData.password)
      .then((user) => {
        const newUser = doc(collection(db, "users"));

        setDoc(
          newUser,
          {
            id: user.user.uid,
            ...location.state,
            ...formData,
            points: 0,
          },
          { merge: true }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="h-screen">
      <div className="container h-full px-6 py-24 min-[320px]:ml-14 ">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between ">
          {/* <!-- Left column container with background--> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img src={Logo} className="w-12/12 -mt-24" alt="Phone" />
          </div>

          {/* <!-- Right column container with form --> */}
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12 ">
            {/* <!-- Usuario input --> */}
            <label>Usuario</label>
            <TEInput
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              label="Usuario"
              size="lg"
              className="mb-6"
            ></TEInput>

            {/* <!-- Contrasena input --> */}
            <label>Contrasena</label>
            <TEInput
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              label="Contrasena"
              className="mb-6"
              size="lg"
            ></TEInput>

            {/* <!-- Confirma contrasena input --> */}
            <label>Confirma contrasena</label>
            <TEInput
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              label="Confirma contrasena"
              className="mb-6"
              size="lg"
            ></TEInput>

            {/* <!-- Submit button --> */}
            <TERipple rippleColor="light" className="w-full">
              <button
                onClick={handleSubmit}
                type="submit"
                className="inline-block w-full rounded bg-purple-700 text-white py-3 px-4 text-center font-semibold text-lg transition duration-150 ease-in-out hover:bg-purple-800 focus:bg-purple-800 active:bg-purple-900 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:bg-primary-700 dark:active:bg-primary-800"
              >
                Registrar
              </button>
            </TERipple>
          </div>
        </div>
        <div style={{ marginTop: "42px", marginLeft: "20px" }}>
          <a href="/registro">Regresar</a>
        </div>
      </div>
    </section>
  );
};

export default Registro2;
