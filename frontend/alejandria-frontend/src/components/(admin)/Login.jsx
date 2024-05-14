import React from 'react'
import logo from "../../assets/logo.png"
import { useForm } from "react-hook-form"
import { login } from '../../services/UserService'
import './css/login.css'

export const Login = () => {

    const { handleSubmit, register } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await login(data); // Esperar a que se resuelva la promesa
            console.log("Response: ", response);
        } catch (error) {   
            console.log(error);
        }
    }

    return (
        <>
            <div className='container-fluid'>
                <div className="row justify-content-center text-center">
                    <div className="col-5 login-right d-flex flex-column align-items-center login-welcome">
                        <img src={logo} alt="logo" className='position-absolute logo-img' />
                        <h2>Bienvenido de nuevo</h2>
                        <p>Ingresa con tus datos personales</p>
                        <button className='btn btn-primary mt-5 signup-btn px-5'>No tengo una cuenta</button>
                    </div>

                    <div className="col-7 login-left position-relative">

                        <h1 className='login-title mb-5'>Ingresa a Alejandria</h1>
                        <p className='mb-4'>Ingresa con tus datos personales</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group row justify-content-center">
                                <div className="col-md-6">
                                    <input type="email" className='form-control login-input rounded-1' placeholder='correo electrónico' {...register("email")} />
                                </div>

                            </div>
                            <div className="form-group row justify-content-center">
                                <div className="col-md-6">
                                    <input type="password" className='form-control login-input rounded-1' placeholder='contraseña' {...register("password")} />

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
