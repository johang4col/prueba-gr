import React, {useState, useEffect} from "react";
import {Form, Input, Button, Space, Layout} from "antd";
//para la base de datos
import {fire} from "../../util/firebase";
import "firebase/firestore";
const db = fire.firestore(fire);


export default function AdminRegistrados(props){
    const {dataRead }=props;
    const [registrados, setRegistrados]=useState([]);
    const [bitDeCambio, setBitDeCambio]=useState("");

    useEffect(() => {
        
        if (registrados !="") {console.log("registrados",registrados);}
        else {
            fetcBlogs();
        }
      }, [bitDeCambio])



      const fetcBlogs= async() => {
        const response = db.collection("guest");
        const data= await response.get();
        
        const itemsArray =[];
        data.docs.forEach(doc=>{
          const data2=doc.data();
          data2.id= doc.id;
          itemsArray.push(data2);
            //console.log(`${doc.id} => ${doc.data().hola} `)
            //setRegistrados([...registrados, doc.data()])
            
            console.log("docs",data2.id)
            console.log(doc.data.id);
        })
        
        setRegistrados(itemsArray);
        setBitDeCambio(!bitDeCambio)
    }


     


    if (dataRead !="") {

                if (dataRead.Tipo_ingreso ==="0") {
                    return( <div>  <h1> Sólo pueden acceder si eres administrador</h1> </div> )
                }
            
                return(
                    <div>
                        <h1>ADMIN registrados</h1>
                    </div>
                )

    }
    else {return(  <div>Loading</div>  )}
}