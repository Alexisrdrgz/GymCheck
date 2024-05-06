import React, { useState } from 'react';
import Registro from './Registro';
import Registro2 from './Registro2';
import axios from 'axios';

const RegistroContainer = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        memberId: '',
        birthDate: '',
        phoneNumber: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const handleRegistroSubmit = (data) => {
        setFormData({
            ...formData,
            fullName: data.fullName,
            memberId: data.memberId,
            birthDate: data.birthDate,
            phoneNumber: data.phoneNumber
        });
    };

    const handleRegistro2Submit = async (data) => {
        try {
            const postData = {
                ...formData,
                username: data.username,
                password: data.password,
                confirmPassword: data.confirmPassword
            };
            const response = await axios.post('your_api_endpoint', postData);
            console.log('Data posted successfully:', response.data);
            // Redirect to success page or perform other actions
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    return (
        <div>
            <Registro onSubmit={handleRegistroSubmit} />
            <Registro2 onSubmit={handleRegistro2Submit} /> {/* Make sure onSubmit prop is passed here */}
        </div>
    );
}

export default RegistroContainer;
