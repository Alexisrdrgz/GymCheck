import React from 'react';
import { TEInput, TERipple } from "tw-elements-react"; // Added TERipple import
import Logo from '../../assets/GymCheck_Logo__1_-removebg-preview 1.png';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditarPerfil = () => {

    const Siguiente = () => {
      console.log('Registrado');
      toast.success('Guardado con exito');
    }

    return (
        <section className="h-screen">
          <div className="container h-full px-6 py-24 -mt-12 ">
            <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between ">
              {/* <!-- Left column container with background--> */}
              <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                <img
                  src={Logo}
                  className="w-12/12 -mt-24"
                  alt="Phone"
                />
              </div>
    
              {/* <!-- Right column container with form --> */}
              <div className="md:w-8/12 lg:ml-6 lg:w-5/12 ">
                <form>
                  {/* <!-- Email input --> */}
                  <label>Usuario</label>
                  <TEInput
                    type="text"
                    label="usuario"
                    size="lg"
                    className="mb-6"
                  ></TEInput>
    
                  {/* <!--Password input--> */}
                  <label>Contrasena</label>
                  <TEInput
                    type="password"
                    label="contrasena"
                    className="mb-6"
                    size="lg"
                  ></TEInput>
                     <label>Numero de telefono</label>

                    <TEInput
                    type="text"
                    label="Numero de telefono"
                    className="mb-6"
                    size="lg"
                  ></TEInput>
                 
                    
    
                  {/* <!-- Submit button --> */}
                  <TERipple rippleColor="light" className="w-full">
                    <button
                      onClick={Siguiente}
                      type="button"
                      className="inline-block w-full rounded bg-purple-700 text-white py-3 px-4 text-center font-semibold text-lg transition duration-150 ease-in-out hover:bg-purple-800 focus:bg-purple-800 active:bg-purple-900 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:bg-primary-700 dark:active:bg-primary-800"
                    >
                      Guardar
                    </button>
                  </TERipple>
                </form>
              </div>
            </div>
            <div style={{marginTop:'42px', marginLeft:'20px'}}>
              <a href='/ajustes' >Home</a>
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
          {/* Toast container */}
          <ToastContainer />
        </section>
    );
}

export default EditarPerfil;
