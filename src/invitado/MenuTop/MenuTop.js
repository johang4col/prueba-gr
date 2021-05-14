import React from "react";
import { Button } from "antd";
import { MenuFoldOutlined, PoweroffOutlined ,CloseSquareOutlined  } from '@ant-design/icons';

import logo1 from "../../assets/Logo1.png"
import "./MenuTop.scss";


export default function MenuTop(props){
    const {handleLogout, setMenuCollapsed, menuCollapsed}=props;


    return(
        <div className="menu-top">
            <div className="menu-top__left">
                    
                    <img className="menu-top__left-logo"
                        src={logo1}
                        alt="eventos gay bogotá"
                    />
                    <Button type="link" type="link" onClick={() => setMenuCollapsed(!menuCollapsed) } >
                        <MenuFoldOutlined  />
                    </Button>
            </div>


            <div className="menu-top__right">
                    <Button type="link">
                        <PoweroffOutlined onClick={handleLogout} />
                    </Button>
            </div>

        </div>
    )
}