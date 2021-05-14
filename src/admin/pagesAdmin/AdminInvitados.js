import React, {useState, useEffect} from "react";
import {Form, Input, Button, Space, Layout} from "antd";
//para la base de datos
import {fire} from "../../util/firebase";
import "firebase/firestore";
const db = fire.firestore(fire);


export default function AdminInvitados(){

      return(
        <div>
            <h1>ADMIN Invitados</h1>
 
        </div>
    )
}
