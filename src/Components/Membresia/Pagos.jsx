import React from "react";
import IconButton from "@mui/material/IconButton";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { TEInput, TERipple } from "tw-elements-react";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const MyComponent = ({ title, description, icon, icon2 }) => {

  return (
    <div style={styles.container}>
      <div style={styles.iconContainer}>
      <TERipple rippleColor="light" >
                        <button
                          type="button"
                          className="rounded-full bg-purple-300 w-10 h-10 border-2 border-gray ml-28 mt-3"
                         
                        >
                            <AccessAlarmIcon />
                        </button>
                      </TERipple>
      </div>
      <div style={styles.contentContainer}>
        <p style={styles.title}>{title}</p>
        <p style={styles.fechas}>{description}</p>
      </div>
      <div style={styles.backgroundCircle}>
      <TERipple rippleColor="light" style={styles.icon1} className="ml-4 mt-4">
                        <button
                          type="button"
                          className=""
                          onClick={() => {window.location.href = '/calendario'}}
                        >
                            <CalendarMonthIcon />
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
    marginLeft:"-18px"
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: -95,
  },
  contentContainer: {},
  title: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 50,
  },
  backgroundCircle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    position: "relative",
    left: -5,
    top: 6,
    borderWidth: 2,
    borderColor: "#FFF",
    backgroundColor: "#F3DFFF",
    
  },
  icon1: {
    position: "relative",
    left: -6,
    top: -6,
  },
  fechas: {
    paddingLeft: 50,
    fontSize: 15,
    color: "gray",
  }, circle2: {
    width: 45,
    height: 45,
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 50,
    marginLeft: 100, // Espacio entre el botón y el círculo
    justifyContent: "center",
  },
};

export default MyComponent;
