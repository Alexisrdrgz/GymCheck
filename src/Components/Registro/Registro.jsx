import React from 'react'
import { TEInput, TERipple } from "tw-elements-react";
import Logo from '../../assets/GymCheck_Logo__1_-removebg-preview 1.png';

const Registro = () => {

    const siguiente = () => {
        console.log('Siguiente')
        window.location = '/registro2'
    }

    return (
        <section className="h-screen">
          <div className="container h-full px-6 py-24 min-[320px]:ml-14 ">
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
                  <label>Nombre Completo</label>
                  <TEInput
                    type="text"
                    label="Nombre Completo"
                    size="lg"
                    className="mb-6"
                  ></TEInput>
    
                  {/* <!--Password input--> */}
                  <label>Numero de Socio</label>
                  <TEInput
                    type="text"
                    label="Numero de socio"
                    className="mb-6"
                    size="lg"
                  ></TEInput>
                     <label>Fecha de nacimiento</label>

                    <TEInput
                    type="date"
                    label=""
                    className="mb-6"
                    size="lg"
                  ></TEInput>
                    <label>Numero de telefono</label>
                    <TEInput
                    type="tel"
                    label="Numero de Telefono"
                    className="mb-6 rounded-xl"
                    size="lg"
                  ></TEInput>
                    
    
                 
               
    
                  {/* <!-- Submit button --> */}
    
                  <TERipple rippleColor="light" className="w-full">
                    <button
                    onClick={siguiente}
                      type="button"
                      className="inline-block w-full rounded bg-purple-700 text-white py-3 px-4 text-center font-semibold text-lg transition duration-150 ease-in-out hover:bg-purple-800 focus:bg-purple-800 active:bg-purple-900 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:bg-primary-700 dark:active:bg-primary-800"
                    >
                      Siguiente
                    </button>
                  </TERipple>
    
                 
                </form>
              </div>
            </div>
          </div>
        </section>
      );
    
}

export default Registro