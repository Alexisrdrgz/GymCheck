import React from "react";
import IconButton from "@mui/material/IconButton";
import { TERipple } from "tw-elements-react";
import PersonIcon from '@mui/icons-material/Person';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Ajuste = ({ title }) => {

  const Seleccion = () => {
    if (title === "Editar Perfil") {
      console.log("Editar Perfil");
      window.location.href = '/editarperfil';
    }
    if (title === "Actualizaciones") {
      window.location.href = '/actualizaciones';
    }
    if (title === "Cerrar Sesion") {
      window.location.href = '/';
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.backgroundCircle}>
        <TERipple rippleColor="light">
          <button
            type="button"
            className="rounded-full bg-purple-300 w-10 h-10 border-2 border-gray"
          >
            <PersonIcon />
          </button>
        </TERipple>
      </div>
      <div style={styles.contentContainer}>
        <p style={styles.title}>{title}</p>
      </div>
      <div>
        <TERipple rippleColor="light" style={styles.icon1} className="ml-4 mt-4">
          <button
            type="button"
            className=""
            onClick={Seleccion}
          >
            <ChevronRightIcon />
          </button>
        </TERipple>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "lightgray",
    backgroundColor: "#fff",
    marginBottom: 20,
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginLeft: "-18px"
  },
  contentContainer: {},
  title: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 50,
  },
  backgroundCircle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    position: "relative",
    left: 5,
    borderWidth: 2,
    borderColor: "#FFF",
    backgroundColor: "#F3DFFF",
  },
  icon1: {
    position: "relative",
    left: -6,
    top: -6,
  },
};

export default Ajuste;
