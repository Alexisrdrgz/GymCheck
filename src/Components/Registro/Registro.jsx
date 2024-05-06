import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom
import { TEInput, TERipple } from "tw-elements-react";
import Logo from '../../assets/GymCheck_Logo__1_-removebg-preview 1.png';

const Registro = () => {
    const history = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        memberId: '',
        birthDate: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSiguiente = () => {
        // Redirect to Registro2 component
        history('/registro2');
      };

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
                            {/* <!-- Nombre Completo input --> */}
                            <label>Nombre Completo</label>
                            <TEInput
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                label="Nombre Completo"
                                size="lg"
                                className="mb-6"
                            ></TEInput>

                            {/* <!-- Numero de Socio input --> */}
                            <label>Numero de Socio</label>
                            <TEInput
                                type="text"
                                name="memberId"
                                value={formData.memberId}
                                onChange={handleChange}
                                label="Numero de socio"
                                className="mb-6"
                                size="lg"
                            ></TEInput>

                            {/* <!-- Fecha de nacimiento input --> */}
                            <label>Fecha de nacimiento</label>
                            <TEInput
                                type="date"
                                name="birthDate"
                                value={formData.birthDate}
                                onChange={handleChange}
                                label=""
                                className="mb-6"
                                size="lg"
                            ></TEInput>

                            {/* <!-- Numero de telefono input --> */}
                            <label>Numero de telefono</label>
                            <TEInput
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                label="Numero de Telefono"
                                className="mb-6 rounded-xl"
                                size="lg"
                            ></TEInput>

                            {/* <!-- Siguiente button --> */}
                            <TERipple rippleColor="light" className="w-full">
                                <button
                                    type="button"
                                    onClick={handleSiguiente}
                                    className="inline-block w-full rounded bg-purple-700 text-white py-3 px-4 text-center font-semibold text-lg transition duration-150 ease-in-out hover:bg-purple-800 focus:bg-purple-800 active:bg-purple-900 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:bg-primary-700 dark:active:bg-primary-800"
                                >
                                    Siguiente
                                </button>
                            </TERipple>
                        </form>
                    </div>
                </div>
                <div style={{marginTop:'42px', marginLeft:'20px'}}>
                    <a href='/registro' >Regresar</a> 
                </div>
            </div>
        </section>
    );
}

export default Registro;
