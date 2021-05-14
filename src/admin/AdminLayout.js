import React, {useState, useEffect} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {Layout} from "antd";
import MenuTop from "../invitado/MenuTop";
import "./AdminLayout.scss";
import MenuSider from "../invitado/MenuSider";

const AdminLayout = (props) => {

const {routes, formData, hasAccount, setFormData, emailTransferencia}=props;
const {handleLogout}=props;
const [menuCollapsed, setMenuCollapsed]=useState(false);
const { Header, Content, Footer } = Layout;

    return(
        
            
        <Layout>
            <MenuSider menuCollapsed={menuCollapsed} 
            formData={formData}
            hasAccount={hasAccount}
            setFormData={setFormData}
            emailTransferencia={emailTransferencia}
               
            />

            <Layout className="layout-hero">
                <Header className="layout-hero__header">
                    <MenuTop handleLogout={handleLogout} setMenuCollapsed={setMenuCollapsed} menuCollapsed={menuCollapsed} />
                </Header>

                <Content className="layout-hero__content">

                    <h3>contenido Admin layout</h3>
                    <LoadRoutes routes={routes}  />

                </Content>

                <Footer className="layout-hero__footer">
                    <h4> Pie de página </h4>
                </Footer>
                
            </Layout>

        </Layout>
      
    )
}


function LoadRoutes({ routes  }) { // es igual que hacer el destructurin asi: const { routes } = props;
    return ( 
      <Switch>
          {routes.map((route, index) => (
            <Route 
                key ={index}
                path={ route.path}
                exact={route.exact}
               // component={route.component}

                render= {props => <route.component routes={route.routes} {...props}

                />}
            />
     ))}

      </Switch>
    )


}


export default AdminLayout;