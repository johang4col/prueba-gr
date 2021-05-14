import React from "react";
import {Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, MenuFoldOutlined, EyeInvisibleOutlined, EyeTwoTone, MailOutlined  } from '@ant-design/icons';

export default function SignIn (props) {

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
        passwordError
    } =props;

    return (
        <div>
        
        <Form.Item>
                                <Input
                                
                                    type="email"
                                    name="email"
                                    value={email} 
                                    placeholder="correo electrónico"
                                    className="content-form__input"
                                    prefix={<MailOutlined />} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    className="content-form__input"
                                />
                                <p className="errorMsg">{emailError}</p>
                            </Form.Item>

                            <Form.Item >
                                    <Input.Password
                                    autoFocus 
                                    required 
                                    autoComplete="off"
                                    value={password} 
                                    placeholder="password"
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    onChange={(e) => setPassword(e.target.value)}  
                                    className="content-form__input"
                                    />
                                    <p className="errorMsg">{passwordError}</p>
                            </Form.Item>
        </div>

    )
}