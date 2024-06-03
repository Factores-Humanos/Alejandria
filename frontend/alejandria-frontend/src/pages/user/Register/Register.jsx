import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { register } from '../../../services/UserService'

import logo from "../../../assets/logo.png"
import "./register.css"

const Register = () => {

    const [formData, setFormdata] = useState({
        user_name: '',
        email_address: '',
        user_password: '',
        confirmPassword: ''
    })

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [passwordValidation, setPasswordValidation] = useState('')
    const [passwordMatch, setPasswordMatch] = useState('');


    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormdata({
            ...formData,
            [e.target.name]: e.target.value
        })

        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (name === 'user_password') {
            if (!passwordRegex.test(value)) {
                setPasswordValidation('La contraseña debe contener al menos un número, una letra mayúscula, una letra minúscula y tener al menos 6 caracteres');
            } else {
                setPasswordValidation('');
            }
        }

        if (name === 'confirmPassword') {
            if (value !== formData.user_password) {
                setPasswordMatch('Las contraseñas no coinciden');
            } else {
                setPasswordMatch('');
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita el envío automático del formulario

        // Verifica si algún campo está vacío
        for (const key in formData) {
            if (formData[key].trim() === '') {
                setError('Por favor completa todos los campos');
                return;
            }
        }
        setError('')
        setSuccess('')

        if (formData.user_password !== formData.confirmPassword) {
            setError('Las contraseñas no coinciden')
            return
        }

        try {
            const response = await register({
                user_name: formData.user_name,
                email_address: formData.email_address,
                user_password: formData.user_password
            });
            setSuccess('Cuenta creada exitosamente')
        } catch (error) {
            setError('Error al crear la cuenta');
        }
    }

    return (
        <>
            <div className='container-fluid'>
                <div className="row justify-content-center text-center">


                    <div className="col-7 login-left position-relative">

                        <h1 className='login-title mb-5'>Crea tu cuenta</h1>
                        <p className='mb-4'>Crea una nueva cuenta</p>

                        <div className="message-container justify-content-center text-center mx-auto mb-5">
                            {error && <p className='error-message' > {error} </p>}
                            {success && <p className='text-success' > {success} </p>}
                        </div>


                        <form onSubmit={handleSubmit} >
                            <div className="form-group row justify-content-center">
                                <div className="col-md-6">
                                    <input type="text" className='form-control login-input rounded-1' name='user_name' value={formData.user_name} onChange={handleChange} placeholder='Nombre completo' />
                                </div>

                            </div>
                            <div className="form-group row justify-content-center">
                                <div className="col-md-6">
                                    <input type="email" className='form-control login-input rounded-1' placeholder='Correo electrónico' name='email_address'
                                        value={formData.email_address}
                                        onChange={handleChange} />
                                </div>

                            </div>
                            <div className="form-group row justify-content-center">
                                <div className="col-md-6">
                                    <input type="password" className='form-control login-input rounded-1' placeholder='Contraseña' name='user_password'
                                        value={formData.user_password}
                                        onChange={handleChange} />
                                    {passwordValidation && (
                                        <p className="error-message">{passwordValidation}</p>
                                    )}

                                </div>
                            </div>
                            <div className="form-group row justify-content-center">
                                <div className="col-md-6">
                                    <input type="password" className='form-control login-input rounded-1' placeholder='Repita la contraseña' name='confirmPassword'
                                        value={formData.confirmPassword}
                                        onChange={handleChange} />
                                    {passwordMatch && (
                                        <p className="error-message">{passwordMatch}</p>
                                    )}
                                </div>
                            </div>
                            <div className="row justify-content-center mt-3">
                                <div className="col">
                                    <button className='btn btn-success login-btn px-4' type='submit'>Crear cuenta</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-5 login-right d-flex flex-column align-items-center login-welcome">
                        <Link to="/">
                            <img src={logo} alt="logo" className='position-absolute logo-img' />
                        </Link>
                        <h2>Bienvenido a Alejandria</h2>
                        <p>Crea tu cuenta</p>
                        <Link to="/login" className='btn btn-primary mt-5 signup-btn px-5' >
                            Ya tengo una cuenta
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register