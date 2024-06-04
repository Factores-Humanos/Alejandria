import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useSignIn from 'react-auth-kit/hooks/useSignIn'

import logo from "../../../assets/logo.png"

import { login } from '../../../services/UserService'


import useAuthUser from 'react-auth-kit/hooks/useAuthUser';

import './login.css'

export const Login = () => {

    const signIn = useSignIn()
    const [formData, setFormData] = useState({ email_address: '', user_password: '' })
    const navigate = useNavigate()


    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await login(formData)
            if (res.status === 200) {
                // Verificar la estructura del objeto que se pasa a signIn
                console.log("data: " + JSON.stringify(res.data));
                const signInData = {
                    auth: {
                        token: res.data.token.access,
                        tokenType: 'Bearer',
                        authState: res.data.user.user_name,
                        expiresIn: 0, // Set expiresIn to 0 to make the session never expire
                    },
                    userState: {
                        id: res.data.user.id,
                        name: res.data.user.user_name,
                        email: res.data.user.email_address,
                        role: res.data.user.roles[0].description,
                    }
                }
                // Revisar la lógica de autenticación en useSignIn
                const signInResult = signIn(signInData)
                console.log("signInResult: " + signInResult);


                if (signInResult) {
                    console.log("usuario: " + signInData.userState.role);
                    if (signInData.userState.role === "cliente") {
                        navigate('/')
                    }
                    else {
                        navigate('/admin')

                    }
                }
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    }


    return (
        <>
            <div className='container-fluid'>
                <div className="row justify-content-center text-center">
                    <div className="col-5 login-right-login d-flex flex-column align-items-center login-welcome">
                        <Link to="/">
                            <img src={logo} alt="logo" className='position-absolute logo-img' />
                        </Link>
                        <h2>Bienvenido de nuevo</h2>
                        <p>Ingresa con tus datos personales</p>
                        <Link to="/register" className='btn btn-primary mt-5 signup-btn px-5'>
                            No tengo una cuenta
                        </Link>
                    </div>

                    <div className="col-7 login-left position-relative">
                        <h1 className='login-title mb-5'>Ingresa a Alejandria</h1>
                        <p className='mb-4'>Ingresa con tus datos personales</p>
                        <form onSubmit={onSubmit}>
                            <div className="form-group row justify-content-center">
                                <div className="col-md-6">
                                    <input
                                        type="email"
                                        className='form-control login-input rounded-1'
                                        placeholder='correo electrónico'
                                        onChange={(e) => setFormData({ ...formData, email_address: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="form-group row justify-content-center">
                                <div className="col-md-6">
                                    <input
                                        type="password"
                                        className='form-control login-input rounded-1'
                                        placeholder='contraseña'
                                        onChange={(e) => setFormData({ ...formData, user_password: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="row justify-content-center mt-3">
                                <div className="col">
                                    <button className='btn btn-success login-btn px-4' type='submit'>Ingresar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
