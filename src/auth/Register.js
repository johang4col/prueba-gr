import React from "react";
import {Form, Input, Button, Checkbox, notification, Space } from "antd";
import { UserOutlined, MenuFoldOutlined, EyeInvisibleOutlined, EyeTwoTone, MailOutlined  } from '@ant-design/icons';

export default function Register (props) {

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
        setFormData
    } =props;
    //console.log(formData);
    return (
        <div>
        <h1 style={{color:"white"}} >Formulario de registro </h1>
        
        <Form.Item>
                                <Input
                                
                                    type="email"
                                    name="email"
                                    value={email} 
                                    placeholder="correo electrónico"
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

                            <Space   position="horizontal" >

                                    <Form.Item >
                                            <Input
                                            autoFocus 
                                            required 
                                            value={formData.nombre} 
                                            placeholder="Nombre"
                                            onChange={(e) => setFormData({ ...formData, nombre: e.target.value})}  
                                            className="content-form__input"
                                            />
                                            
                                    </Form.Item>

                                    <Form.Item >
                                            <Input
                                            autoFocus 
                                            required 
                                            value={formData.apellido} 
                                            placeholder="Apellido"
                                            onChange={(e) => setFormData({ ...formData, apellido: e.target.value})}  
                                            className="content-form__input"
                                            />
                                            
                                            
                                    </Form.Item>

            </Space>

            <Space position="horizontal" >

                                    <Form.Item >
                                            <Input
                                            autoFocus 
                                            required 
                                            value={formData.whatsapp} 
                                            placeholder="Whatsapp"
                                            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value})}  
                                            className="content-form__input"
                                            />
                                            
                                    </Form.Item>

                                    <Form.Item >
                                            <Input
                                            autoFocus 
                                            required 
                                            value={formData.cedula} 
                                            placeholder="cedula"
                                            onChange={(e) => setFormData({ ...formData, cedula: e.target.value})}  
                                            className="content-form__input"
                                            />
                                            
                                            
                                    </Form.Item>

            </Space>

        </div>

    )
}