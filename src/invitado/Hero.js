import React, {useState, useEffect} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {Layout} from "antd";
import MenuTop from "./MenuTop";
import "./Hero.scss";
import MenuSider from "./MenuSider/MenuSider";


import {fire} from "../util/firebase";
import "firebase/firestore";
//import { waitFor } from "@testing-library/dom";
const db = fire.firestore(fire);


const Hero = (props) => {

const {routes, formData, hasAccount, setFormData, emailTransferencia}=props;
const {handleLogout}=props;
const [menuCollapsed, setMenuCollapsed]=useState(false);
const { Header, Content, Footer } = Layout;



const [loading, setLoading]=useState(true);
const [dataRead, setDataRead]=useState([]);
const [bitDeCambio, setBitDeCambio]=useState("");



useEffect(() => {
    handleRead();
  }, [])
  
  useEffect(() => {
      if (dataRead !="") {
          //console.log("leyendo...", dataRead);// AQUÍ YA ESTARÍA LISTO EL SISTEMA PARA PUBLICAR Y USAR LAS VARIABLES LEIDAS
        //console.log(dataRead.Tipo_ingreso);
          setLoading(false);
      }
  }, [bitDeCambio])
  
   const handleRead = async() => {
    setLoading(true);
       const response = db.collection("guest").doc(emailTransferencia);
       const data= await response.get();
       setDataRead(data.data());
       
       setBitDeCambio(!bitDeCambio);
      }


    return(
        
            
        <Layout>
            <MenuSider menuCollapsed={menuCollapsed} 
            formData={formData}
            hasAccount={hasAccount}
            setFormData={setFormData}
            emailTransferencia={emailTransferencia}
            loading={loading}
            dataRead={dataRead}  
            />

            <Layout className="layout-hero">
                <Header className="layout-hero__header">
                    <MenuTop handleLogout={handleLogout} setMenuCollapsed={setMenuCollapsed} menuCollapsed={menuCollapsed} />
                </Header>

                <Content className="layout-hero__content">

                    <h3>contenido</h3>
                    <LoadRoutes routes={routes} dataRead={dataRead}   />

                </Content>

                <Footer className="layout-hero__footer">
                    <h4>Pie de página</h4>
                </Footer>
                
            </Layout>

        </Layout>
      
    )
}


function LoadRoutes({ routes, dataRead  }) { // es igual que hacer el destructurin asi: const { routes } = props;
    return ( 
      <Switch>
          {routes.map((route, index) => (
            <Route 
                key ={index}
                path={ route.path}
                exact={route.exact}
               // component={route.component}

                render= {props => <route.component routes={route.routes} {...props}
                dataRead={dataRead} 
                />}
            />
     ))}

      </Switch>
    )


}


export default Hero;

