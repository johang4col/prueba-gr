import React, {useState, useEffect} from "react";
//import {Link} from "react-router-dom";
//import {Form, Input, Button, Checkbox, notification, Space, Menu } from "antd";

//import  { HomeOutlined,UserOutlined , HeartOutlined , MenuFoldOutlined, EyeInvisibleOutlined, EyeTwoTone, MailOutlined  } from "@ant-design/icons";

import Sider from "antd/lib/layout/Sider";
import "./MenuSider.scss";

//Páginas del menu sider del Invitado
import MenuSiderInfo from "./MenuSiderComponents/MenuSiderInfo";
import MenuSiderInvitado from "./MenuSiderComponents/MenuSiderInivtado";


//Páginas del menúSider Administrador
import MenuSiderAdmin from "../../admin/MenuSiderAdmin";


import {fire} from "../../util/firebase";
import "firebase/firestore";
//import { render } from "@testing-library/react";
const db = fire.firestore(fire);

export default function MenuSider(props) {
    const {menuCollapsed, formData, hasAccount, setFormData, emailTransferencia,

        loading,
        dataRead,
    
    
    }=props;




            if (loading) {
                return(
                        <Sider className="guest-sider" collapsed={menuCollapsed}>
                            <h1>LODING</h1>
                        </Sider>
                )
            } else {
                return(
                    <Sider className="guest-sider" collapsed={menuCollapsed}>
                        <MenuSiderInfo dataRead={dataRead} menuCollapsed={menuCollapsed} />
                        
                        
                        {dataRead.Tipo_ingreso ==="1" ? (           
                                <MenuSiderAdmin />
                        ):(
                            <MenuSiderInvitado />
                        )}
                        
                    </Sider>
                )
                
                
            }
  
}

