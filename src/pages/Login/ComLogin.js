import * as React from "react"
import axios from 'axios'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import "./Login.css";
import { FooterOverlay, Navbar, Newsletter } from "../../components";
import { Footer } from "../../container";
import { FiFacebook, FiTwitter, FiInstagram, FiUser } from "react-icons/fi";
import { BsEnvelope, BsKey } from "react-icons/bs";

export function ComLogin() {

    const handleLogin = (values) => {
        console.log('LOGIN', values);
        axios.post("http://localhost:5000/usuario/login", values)
            .then((response) => {
                console.log("RESPONSE VALUES", response)
                console.log("RESPONSE VALUES", response.data.email)

                axios.post("http://localhost:5000/admin/", response.data.email)
                    .then((resp) => {
                        console.log(resp.data);
                        console.log(response.data);
                        response.data.isAdmin = resp.data.isAdmin;  //Rapaz que código espaguete é esse, virou o que, o Mario?
                        sessionStorage.setItem("currentUser", JSON.stringify(response.data));
                    })

            })
    }

    return (

        <div>
            <Navbar />
            <div className="container">

                <div className="content first-content">
                    <div className="first-column">
                        <h2 className="title title-primary">Bem vindo!</h2>
                        <p className="description description-primary">Para concluir o pedido</p>
                        <p className="description description-primary">crie a sua conta.</p>
                        <button className="btn btn-primary">Sign up</button>
                    </div>

                    <div className="second-column">
                        <h2 className="title">Login</h2>
                        <div className="social-media">
                            <ul className="list-social-media">
                                <li className="item-social-media"><a href="#"><FiFacebook /> </a></li>
                                <li className="item-social-media"><a href="#"><FiTwitter /></a></li>
                                <li className="item-social-media"><a href="#"> <FiInstagram /></a></li>
                            </ul>
                        </div>

                        <p className="description description-second">ou use seu email: </p>

                        <Formik onSubmit={ handleLogin } initialValues={ {} }>
                            <form className="form">
                                
                                    <label className="label-input">
                                        <div className="icon-modify"><BsEnvelope /></div>
                                        <input name="email" type="email" placeholder="Email" id="email" required></input>
                                    </label>
                                    <label className="label-input">
                                        <div className="icon-modify"><BsKey /></div>
                                        <input name="password" type="text" placeholder="Senha" id="password" required></input>
                                        
                                    </label>
                                    
                                    <a className="password" href="#">Esqueceu sua senha?</a>
                                    <button className="btn btn-second">Sign up</button>
                                
                            </form>
                        </Formik>

                    </div>
                </div>

                <div className="content second-content">
                    <div className="first-column">
                        <h2 className="title title-primary">Bem vindo de volta!</h2>
                        <p className="description description-primary">Para começar o seu passeio gastronômico</p>
                        <p className="description description-primary">faça o seu login.</p>
                        <button className="btn btn-primary">Sign in</button>
                    </div>

                    <div className="second-column">
                        <h2 className="title">Criar conta</h2>
                        <div className="social-media">
                            <ul className="list-social-media">
                                <li className="item-social-media"><a href="#"><FiFacebook /> </a></li>
                                <li className="item-social-media"><a href="#"><FiTwitter /></a></li>
                                <li className="item-social-media"><a href="#"> <FiInstagram /></a></li>
                            </ul>
                        </div>

                        <p className="description description-second">ou use seu email para registro: </p>
                        <Formik onSubmit={ handleLogin } initialValues={ {} }>
                            <form className="form">
                                <label className="label-input">
                                    <div className="icon-modify"><FiUser /></div>
                                    <input type="text" placeholder="Nome" required></input>
                                </label>
                                <label className="label-input">
                                    <div className="icon-modify"><BsEnvelope /></div>
                                    <input type="email" placeholder="Email" required></input>
                                </label>
                                <label className="label-input">
                                    <div className="icon-modify"><BsKey /></div>
                                    <input type="password" placeholder="Senha" required></input>
                                </label>
                                <button className="btn btn-second">Sign up</button>
                            </form>
                        </Formik>
                    </div>
                </div>

            </div>

        </div>
    )
}