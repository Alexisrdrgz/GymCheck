import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendario.css'; // Archivo de estilos CSS personalizados
import Logo from '../../assets/GymCheck_Logo__1_-removebg-preview 1.png'
const MyCalendar = () => {
  return (
    <div>
        <div className='justify-evenly items-center ml-14 mb-20'>
        <img src={Logo} alt="" />
        <label className='ml-20 font-semibold '>Alexis Rodriguez</label></div>
    <div style={{ marginLeft:'40px', margintTop:'50px'}}>
      <div className="calendar-container">
        <Calendar
          selectRange={false} // Desactiva la interactividad de selección de fechas
          className="custom-calendar"
          tileClassName={({ date, view }) => {
            // Marcamos manualmente las fechas con colores específicos
            if (date.getMonth() === 4 && date.getDate() === 10) {
              return 'custom-tile-selected-start';
            } else if (date.getMonth() === 4 && date.getDate() === 15) {
              return 'custom-tile-selected-end';
            } else if (date.getMonth() === 4 && date.getDate() > 10 && date.getDate() < 15) {
              return 'custom-tile-selected-range';
            }
            return '';
          }}
        />
      </div>
    </div>
    </div>
  );
};

export default MyCalendar;
