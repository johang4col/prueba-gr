import React from 'react'
import { Menu } from "antd";
import {Link} from "react-router-dom";

import  { HomeOutlined, FileProtectOutlined , OrderedListOutlined, DotChartOutlined,TeamOutlined  } from "@ant-design/icons";



export default function  MenuSiderAdmin(props){
    const {menuCollapsed, dataRead}=props;

    return(
        <div>
                      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} >
                            <Menu.Item key="5" >
                                <Link to ={"/admin"}>
                                <FileProtectOutlined />
                                    <span className="nav-text">Eventos</span>                  
                                </Link>
                            </Menu.Item>
            
                            <Menu.Item key="2">
                                <Link to={"/admin/registrados"}>
                                <OrderedListOutlined />
                                    <span className="nav-text">Lista de Registrados</span>
                                </Link>
                            </Menu.Item>
            
            
                            <Menu.Item key="3">  
                                <Link to={"/admin/estadisticas"}>
                                <DotChartOutlined />
                                    <span className="nav-text">Estadisticas</span>                   
                                </Link>
                            </Menu.Item>


                            <Menu.Item key="4">
                                <Link to={"/admin/invitados"}>
                                    <TeamOutlined />
                                    <span className="nav-text">Lista de Invitados</span>
                                </Link>
                            </Menu.Item>

                        </Menu>
        
        </div>
    )
}