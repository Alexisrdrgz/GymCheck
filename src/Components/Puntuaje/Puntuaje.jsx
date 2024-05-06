import React from 'react';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Logo from '../../assets/GymCheck_Logo__1_-removebg-preview 1.png';
import './Puntuaje.css'; // Archivo de estilos CSS personalizados
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Medallas from '../../assets/image 28.png';
import Premios from '../../assets/image 46.png';
import { TEInput, TERipple } from "tw-elements-react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const Puntuaje = () => {
  return (
    <div className="container">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
        <div className="labels-container">
          <label>Hello </label>
          <label>Jueves, 20 mayo</label>
        </div>
      </div>

      <div className='border-2 border-gray flex items-center  p-2 ' style={{width:'400px', height:'150px',borderRadius:40}}>
        <div className="circle ">
          <FitnessCenterIcon style={{ fontSize: 60, color: 'black' }} />
        </div>
        <label className="text-2xl font-thin ml-16">Puntos 2,000+</label>
      </div>

      <div className='border-2 border-gray rounded-3xl mt-12 ml-4' style={{width:'400px',height:'200px', backgroundColor:'rgba(255, 96, 121, 0.8)'}}>
        <div>
            <WorkspacePremiumIcon style={{fontSize: 40, marginLeft:'20px',marginTop:'15px'}} />
            </div>

            <div>
            <img src={Medallas} alt="" style={{marginLeft:'248px', width:'150px', marginTop:'-50px'}} />
            
                
            </div >
            <div style={{marginTop:'-50px'}}>
            <label style={{marginLeft:'20px', marginTop:'20px'}}>Tus puntos</label><br />
            <label style={{marginLeft:'20px', marginTop:'20px',fontSize:'30px'}}>900 pts</label>

            </div>


            <div style={{marginTop:'15px'}}>
            <label style={{marginLeft:'20px', }}>Puntos de esta semana</label>
            <label style={{marginLeft:'20px', fontSize:'20px pts' }}>25/30 pts</label>
            </div>
      </div>

      <div className='border-2 border-gray flex items-center  p-2 mt-12' style={{width:'400px', height:'150px',borderRadius:40}}>
        <div className=" ">
          <img src={Premios} alt="" style={{width:'80px'}}/>
        </div>
        <label className="text-lg font-bold ml-16">Recompensas a <br/> partir de</label>
        <WorkspacePremiumIcon style={{fontSize: 40, marginLeft:'20px',marginTop:'15px', color:'#FFB432'}} />
        <label className="">1500</label>
      </div>

      <div style={{marginTop:'42px', marginLeft:'20px'}}>
        <a href='/menu' >Home</a>
        <TERipple rippleColor="light" className="w-full rounded-full items-center justify-evenly -mt-32">
                        <button
                          type="button"
                          className="rounded-full bg-white w-10 h-10 border-2 border-gray ml-32"
                          onClick={() => {window.location.href = '/calendar'}}
                        >
                            <CalendarMonthIcon />
                        </button>
                      </TERipple>
        </div>
    </div>
  );
}

export default Puntuaje;
