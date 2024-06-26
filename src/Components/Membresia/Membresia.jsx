import React from "react";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Pagos from "./Pagos";
import { pagos } from "./data";
import CloseIcon from '@mui/icons-material/Close';
import { TEInput, TERipple } from "tw-elements-react";
import SettingsIcon from '@mui/icons-material/Settings';
import Logo from '../../assets/GymCheck_Logo__1_-removebg-preview 1.png';

const Membresia = () => {

  return (
    <div>
      <div>
        <div style={styles.Contenedor1}>
          <div style={styles.circle}>
          <TERipple rippleColor="light" >
                        <button
                          type="button"
                          className=""
                          onClick={() => {window.location.href = '/menu'}}
                        >
                            <CloseIcon style={{fontSize: 30, marginTop:'5px',marginLeft:'5px'}} />
                        </button>
                      </TERipple>
          </div>
          <span style={styles.textos}>Membresia</span>
          <div style={styles.circle2}>
          <TERipple rippleColor="light" >
                        <button
                          type="button"
                          className=""
                          onClick={() => {window.location.href = '/ajustes'}}
                        >
                            <SettingsIcon style={{fontSize: 30, marginTop:'5px',marginLeft:'5px'}} />
                        </button>
                      </TERipple>
          </div>
        </div>
      </div>
      <div style={styles.avatarContainer}>
        <img src={Logo} alt="" style={{marginLeft:'-32px'}}/>
        <span style={{ color: "black", marginLeft: 23, fontWeight: "bold" }}>
          Alexis Rodriguez
        </span>
        <div style={styles.PagosContenedor}>
          <div style={styles.Pagos}>
            {pagos.map((service) => (
              <Pagos
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                icon2={service.icon2}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membresia;

const styles = {
  Contenedor1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  textos: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
    marginLeft: "28%",
  },
  circle: {
    width: 45,
    height: 45,
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 50,
    marginLeft: 10, // Espacio entre el botón y el círculo
    justifyContent: "center",
  },
  circle2: {
    width: 45,
    height: 45,
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 50,
    marginLeft: 100, // Espacio entre el botón y el círculo
    justifyContent: "center",
  },
  avatarContainer: {
    marginTop: 20,
    marginLeft: 100,
    flexDirection: "column",
  },
  Pagos: {
    marginLeft: -50,
  },
  PagosContenedor: {
    marginTop: 20,
    marginLeft: -30,
    paddingEnd: 30,
  },
};
