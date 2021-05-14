import React from 'react'
import { Menu } from "antd";
import {Link} from "react-router-dom";

import  { HomeOutlined,UserOutlined , HeartOutlined } from "@ant-design/icons";



export default function  MenuSiderInvitado(props){
    const {menuCollapsed, dataRead}=props;

    return(
        <div>
                      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} >
                            <Menu.Item key="1" >
                                <Link to ={"/"}>
                                    <HomeOutlined />
                                    <span className="nav-text">Home</span>                  
                                </Link>
                            </Menu.Item>
            
                            <Menu.Item key="2">
                                <Link to={"/mis-matches"}>
                                    <HeartOutlined />
                                    <span className="nav-text">Mis Matches</span>
                                </Link>
                            </Menu.Item>
            
            
                            <Menu.Item key="3">  
                                <Link to={"/mi-perfil"}>
                                    <UserOutlined />
                                    <span className="nav-text">Mi perfil</span>                   
                                </Link>
                            </Menu.Item>
                        </Menu>
        
        </div>
    )
}