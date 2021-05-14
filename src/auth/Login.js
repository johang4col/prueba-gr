import React from "react";
//import 'antd/dist/antd.css'; // or 'antd/dist/antd.less' en 
import {Form, Input, Button, Checkbox, notification, Space, Layout} from "antd";
import { UserOutlined, MenuFoldOutlined, EyeInvisibleOutlined, EyeTwoTone, MailOutlined  } from '@ant-design/icons';
import "./Login.scss";
import 'antd/dist/antd.css';

import SignIn from "./SignIn";
import Register from "./Register";

import Logo1 from "../assets/Logo1.png"

const Login = (props) =>{


    const {
        email,
        setEmail, 
        password, 
        setPassword, 
        handlelLogin, 
        handleSignup,
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError,
        formData,
        setFormData,

    } =props;

    return(
        <section className="login">
           
            <div className="content"> 
             
             
             
                
                        <Form  className="content-form">

                        
                        <img className="menu-top__left-logo"
                        src={Logo1}
                        alt="eventos gay bogotá"
                        style={{marginBottom:"20px"}}
                    />

                        <Form.Item>
                            {hasAccount ? (
                                <>
                                    <SignIn 
                                        email={email}
                                        setEmail={setEmail}
                                        password={password}
                                        setPassword={setPassword}
                                        handlelLogin={handlelLogin}
                                        handleSignup={handleSignup}
                                        hasAccount={hasAccount}
                                        setHasAccount={setHasAccount}
                                        emailError={emailError}
                                        passwordError={passwordError}
                                    
                                    />
                                <Button className="content-form__button" htmlType="submit" onClick={handlelLogin} >Login</Button>
                                <p>Aún no tienes cuenta ? <span onClick={() => setHasAccount(!hasAccount)} >Registrate</span> </p>
                                </>

                            ) : (
                                <>

                                    <Register 
                                        email={email}
                                        setEmail={setEmail}
                                        password={password}
                                        setPassword={setPassword}
                                        handlelLogin={handlelLogin}
                                        handleSignup={handleSignup}
                                        hasAccount={hasAccount}
                                        setHasAccount={setHasAccount}
                                        emailError={emailError}
                                        passwordError={passwordError}
                                        formData={formData}
                                        setFormData={setFormData}
                                    />

                                <Button className="content-form__button2" htmlType="submit"  onClick={handleSignup} >Registrarme</Button>     
                                <p>Tienes una cuenta ? <span onClick={() => setHasAccount(!hasAccount)} >Login</span></p>
                                </>
                            )}
                            </Form.Item>

                        </Form>
                
                
            </div>
            

        </section>

     
    )
}

export default Login;
