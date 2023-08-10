import React, { useEffect, useState } from "react";
import "./login.css"
import { useLocalStorage } from "../../hooks/useLocalStorage.js";;

const Login = () => {
 const [isLog, setLogin] = useLocalStorage('session', '')
 const [data, setData] = useState({
    name: "",
    number: "",
    pswd: "",
    mail: ""
 })

    const handleInputs = (e) => {
        const {name, value} = e.target;
        const newData = {
            ...data,
            [name]: value
        }
        setData(newData)
    }
    const handleLogin = ()=>{
        
        let loginData = {
            mail: data.mail,
            pswd: data.pswd
        }
        console.log(loginData)
        let pswd = '123456'
        if (pswd == "123456") {
 
            let date = new Date()
            alert(date)
            setLogin(date)
        }
    }

    const handleRegister = () => {
        console.log(data)
    }

    return (
        <div className="section">
            <div className="container">
                <div className="row full-height justify-content-center">
                    <div className="col-12 text-center align-self-center py-5">
                        <div className="section pb-5 pt-5 pt-sm-2 text-center">
                            {/* <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6> */}
                            <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                            <label htmlFor="reg-log"></label>
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4 pb-3 login-titulo">Log In</h4>
                                                <div className="form-group">
                                                    <input onChange={handleInputs}  name="mail" type="email" value={data.mail} className="form-style" placeholder="Email" />
                                                    <i className="input-icon uil uil-at"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input onChange={handleInputs} name="pswd" type="password" value={data.pswd} className="form-style" placeholder="Password" />
                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <div className="login-boton-holder">
                                                    <button onClick={handleLogin} className="btn mt-4">Login</button>
                                                </div>
                                                <p className="mb-0 text-center"><a href="#" className="link">Forgot your password?</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-3 pb-3 login-titulo">Sign Up</h4>
                                                <div className="form-group">
                                                    <input onChange={handleInputs} name="name" type="text" value={data.name} className="form-style" placeholder="Full Name" />
                                                    <i className="input-icon uil uil-user"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input onChange={handleInputs} name="number" type="tel" value={data.number} className="form-style" placeholder="Phone Number" />
                                                    <i className="input-icon uil uil-phone"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input onChange={handleInputs} name="mail" type="email" value={data.mail} className="form-style" placeholder="Email" />
                                                    <i className="input-icon uil uil-at"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input onChange={handleInputs} name="pswd" type="password" value={data.pswd} className="form-style" placeholder="Password" />
                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <div className="login-boton-holder">
                                                  <button onClick={handleRegister} className="btn mt-4">Register</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;