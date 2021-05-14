//Layout
import Hero from "../invitado/Hero";
import AdminLayout from "../admin/AdminLayout";
 


//Admin Pages
import AdminHome from "../admin/pagesAdmin/AdminHome";
import AdminRegistrados from "../admin/pagesAdmin/AdminRegistrados";
import AdminEstadisticas from "../admin/pagesAdmin/AdminEstadisticas";
import AdminInvitados from "../admin/pagesAdmin/AdminInvitados";



//Pages Para Invitados
import HomeInvitado from "../invitado/pages/HomeInvitado";
import MisMatches from "../invitado/pages/MisMatches";
import MiPerfil from "../invitado/pages/MiPerfil";


//Other pages
import Error404 from "../invitado/pages/Error404";


const routes = [

    {
        path: "/", // barra porque será la página principal
        component:Hero,
        exact: false,
        routes: [
      
            { 
                path: "/",
                component: HomeInvitado,
                exact: true,
            },
            {
                path: "/mis-matches",
                component: MisMatches,
                exact: true,
            }, 
            {
                path: "/mi-perfil",
                component: MiPerfil,
                exact: true,
            },


            {
                path: "/admin",
                component: AdminHome,
                exact:true,
            },
            {
                path:"/admin/registrados",
                component: AdminRegistrados,
                exact: true,
            },
            {
                path:"/admin/estadisticas",
                component: AdminEstadisticas,
                exact: true,
            },
                        {
                path:"/admin/invitados",
                component: AdminInvitados,
                exact: true,
            },

            {
                //error 404 siempre debe ir en la última posición
                component: Error404,
            },
        ]

    }


 



];

export default routes;
