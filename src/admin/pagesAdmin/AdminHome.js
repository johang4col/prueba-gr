import React, {useState, useEffect} from "react";
import {Form, Input, Button, Space, Layout} from "antd";
//para la base de datos
import {fire} from "../../util/firebase";
import "firebase/firestore";
const db = fire.firestore(fire);


export default function AdminHome(props){
    
    const {dataRead }=props;
    //console.log("lectura del prosp de admin page",dataRead);

    if (dataRead !="") {

                if (dataRead.Tipo_ingreso ==="0") {
                    return( <div>  <h1> Sólo pueden acceder si eres administrador</h1> </div> )
                }
            
                return(
                    <div>
                        <h1>ADMIN HOME</h1>
                    </div>
                )

    }
    else {return(  <div>Loading</div>  )}

}
