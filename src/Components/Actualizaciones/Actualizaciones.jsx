import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './Actualizaciones.css'
import { TEInput, TERipple } from "tw-elements-react";
const Actualizaciones = () => {
  return (
    <div> <div style={styles.Contenedor1}>
    <div style={styles.circle}>
    <TERipple rippleColor="light" >
                  <button
                    type="button"
                    className=""
                    onClick={() => {window.location.href = '/ajustes'}}
                  >
                      <CloseIcon style={{fontSize: 30, marginTop:'5px',marginLeft:'5px'}} />
                  </button>
                </TERipple>
    </div>
    <span style={styles.textos}>Ajustes</span>
   
  </div >

  <div className='bg-white rounded-full border-2' style={{width:'400px',height:'100px',marginLeft:'12px',marginTop:'46px'}}>
    <div style={{marginLeft:'25px',marginTop:'20px',fontSize:'20px',fontWeight:'bold'}}>
        <span > Ultima actualizacion</span>
    </div>
    <div className = 'text-gray-400' style={{marginLeft:'25px',marginTop:'10px',fontSize:'20px'}}>
        <span > Actualizado el 5 de mayo de 2024</span>
    </div>

  </div>
  
  
  
  
  </div>
  )
}

export default Actualizaciones

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
    
  },
  PagosContenedor: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginLeft: -50,
  },
  
};