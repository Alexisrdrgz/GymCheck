import React, { useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import Perfil from "../../assets/Perfil.png";
import Membresia from "../../assets/Membresia.png";
import Ajustes from "../../assets/Ajustes.png";
import Puntuaje from "../../assets/Puntuaje.png";
import Logo from "../../assets/GymCheck_Logo__1_-removebg-preview 1.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Menu = () => {
  return (
    <div>
      <div className="justify-evenly items-center ml-28">
        <img src={Logo} alt="" className="w-44 h-40" />
        <label className="ml-12"> Bienvedio</label>
      </div>
      <div className="justify-evenly items-center ml-14">
        <div className="grid grid-cols-2 gap-4 ">
          <div className="w-100px h-100px rounded-full items-center justify-evenly my-20 ">
            <div>
              <TERipple
                rippleColor="light"
                className="w-full rounded-full items-center justify-evenly "
              >
                <button
                  type="button"
                  className="rounded-full bg-primary"
                  onClick={() => {
                    window.location.href = "/perfil";
                  }}
                >
                  <img src={Perfil} alt="" />
                </button>
              </TERipple>
              <label> Perfil</label>
            </div>

            <div>
              <TERipple
                rippleColor="light"
                className="w-full rounded-full items-center justify-evenly "
              >
                <button
                  type="button"
                  className="rounded-full bg-primary"
                  onClick={() => {
                    window.location.href = "/pagos";
                  }}
                >
                  <img src={Membresia} alt="" />
                </button>
              </TERipple>
              <label> Membresia</label>
            </div>
          </div>

          <div className="w-100px h-100px rounded-full items-center justify-evenly my-20 ">
            <div>
              <TERipple
                rippleColor="light"
                className="w-full rounded-full items-center justify-evenly "
              >
                <button
                  type="button"
                  className="rounded-full bg-primary"
                  onClick={() => {
                    window.location.href = "/puntuaje";
                  }}
                >
                  <img src={Puntuaje} alt="" />
                </button>
              </TERipple>
              <label> Puntuaje</label>
            </div>

            <div>
              <TERipple
                rippleColor="light"
                className="w-full rounded-full items-center justify-evenly "
              >
                <button
                  type="button"
                  className="rounded-full bg-primary"
                  onClick={() => {
                    window.location.href = "/ajustes";
                  }}
                >
                  <img src={Ajustes} alt="" />
                </button>
              </TERipple>
              <label> Ajustes</label>
            </div>
          </div>
        </div>
        <div>
          <TERipple
            rippleColor="light"
            className="w-full rounded-full items-center justify-evenly "
          >
            <button
              type="button"
              className="rounded-full bg-white w-10 h-10 border-2 border-gray ml-32"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              <CalendarMonthIcon />
            </button>
          </TERipple>
        </div>
      </div>
    </div>
  );
};

export default Menu;
