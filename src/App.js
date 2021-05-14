import { useEffect, useState } from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Login from "./auth/Login";
import routes from "./config/routes";


//para la base de datos
import {fire} from "./util/firebase";
import "firebase/firestore";
const db = fire.firestore(fire);

const App = () => {

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [emailTransferencia, setEmailTransferencia] = useState("")
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue());
  const [loadingApp, setLoadingApp]=useState();



  useEffect(() => {

    if (formData.email !="") {
      console.log("Form Data del SIGN INF FUNCTION", formData);//no muestra el email
      const data =formData;
      db.collection("guest")
      .doc(formData.email)
      .set(data)
      .then (() => {
          console.log("handle save ejecutado");
      })
      .catch(() => {
          
      })  
      
    }

}, [formData.email])


  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () =>{
    /////////////////////////////////setFormData({ ...formData, email: email}); //guarda el email antes de borrarlo del login o signin box
    setEmailError("");
    setPasswordError("");
  }

  const handlelLogin = () =>{
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err =>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disable":
        case"auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPassword(err.message);
          break;
      }
    });
  };

  
  const handleSignup = () => {
    setFormData({ ...formData, flag_de_registro: true});
    setLoadingApp(true);
    clearErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      const userIn=response.user.email;
         setFormData({ ...formData, email: userIn,flag_de_registro: true }); //funcion asíncrona 
     })
    .catch((err) => {
     switch (err.code) {
       case "auth/email-already-in-use":
       case "auth/invalid-email":
         setEmailError(err.message);
       case "auth/weak-password":
         setPasswordError(err.message);
         break;
     }
     
    });
    setLoadingApp(false)
  };

 const handleLogout = () => {
   fire.auth().signOut();
 };

 const authListener = () => {
   fire.auth().onAuthStateChanged((user) => {
     if(user){
       clearInputs();
       setEmailTransferencia(user.email);//estado de email que se usará en la lectura para otros modulso
       setUser(user);
     } else{
       setUser("");
     }
   });
 };

 useEffect (() => {
  authListener();
 },[])



if (loadingApp) {
  return(
    <div>
      <h1>Cargando app</h1>
    </div>
  )
  
} else {

  return (
    <div className="App">
      {user ? (

        <Router>
            <Switch>
            {routes.map((route, index) => (
                <RouteWithSubRoutes key={index} {...route}
                handleLogout={handleLogout} 
                formData={formData}
                hasAccount={hasAccount}
                setFormData={setFormData}
                emailTransferencia={emailTransferencia}
  
                />
            ))}
            </Switch>
        </Router>
        

      ) : (
        <Login 
        email={email}
        setEmail={setEmail}
        password={password} 
        setPassword={setPassword} 
        handlelLogin={handlelLogin} 
        handleSignup={handleSignup} 
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
        formData={formData}
        setFormData={setFormData}
        />

      )}

    </div>
  );
};



  
}



 

function RouteWithSubRoutes (route) {
  //console.log("esto es rotue",route)
  const {handleLogout, formData, hasAccount, setFormData, emailTransferencia}=route;
    //console.log("EN LA APP LO QUE HAY DE FORM",setFormData)
  return(
    <Route 
      path ={route.path}
      exact={route.exact}
      render= {props => <route.component routes={route.routes} {...props} handleLogout={handleLogout}
      formData={formData}
      hasAccount={hasAccount}
      setFormData={setFormData}
      emailTransferencia={emailTransferencia}
      />}
    
    />

  )
}



export function defaultFormValue(){
  return {
      nombre: "",
      apellido:"",
      cedula:"",
      email:"",
      whatsapp:"",
      Tipo_ingreso: "0",
      flag_de_registro:false,
      invitado_aprobado:false,

  };

}


/*

*/




export default App;


          //si está logueado ejecuta este segmento de código
        //  <Hero handleLogout={handleLogout} />