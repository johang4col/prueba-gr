import React from 'react'

export default function  MenuSiderInfo(props){

    const {menuCollapsed, dataRead}=props;

    return(
        <div>
            {menuCollapsed ?(null):(

                    <>
                            {dataRead.Tipo_ingreso =="1" ? (
                                <>
                                    <h1 style={{color:"white", textAlign:"left", marginLeft:"10px"}}>Administrador</h1>
                                    <h4 style={{color:"white", marginTop:"20px", textAlign:"left", marginLeft:"10px"}}>  
                                                {dataRead.nombre} {dataRead.apellido} 
                                    </h4>
                                    <h4 style={{color:"white", textAlign:"left", marginLeft:"10px"}}>  
                                            {dataRead.email} 
                                    </h4>
                                </>
                                

                                
                            ):(
                                
                                <>
                                    <h1 style={{color:"white", marginTop:"20px", textAlign:"left", marginLeft:"10px"}}>  
                                            {dataRead.nombre} {dataRead.apellido} 
                                    </h1>
                                    <h4 style={{color:"white", textAlign:"left", marginLeft:"10px"}}>  
                                            {dataRead.email} 
                                    </h4>
                                    <h4 style={{color:"white", textAlign:"left", marginLeft:"10px"}}>  
                                            C.C. {dataRead.cedula}
                                    </h4>
                                    <h4 style={{color:"white", textAlign:"left", marginLeft:"10px"}}>  
                                            Tel/wpp: {dataRead.whatsapp}
                                    </h4>
                                    
                                </>   
                            
                            )}
                    </>

            ) }
        
        </div>
    )
}


/*
                            <>
                                <h1 style={{color:"white", marginTop:"20px", textAlign:"left", marginLeft:"10px"}}>  
                                          {dataRead[0].nombre} {dataRead[0].apellido} 
                                </h1>
                                <h4 style={{color:"white", textAlign:"left", marginLeft:"10px"}}>  
                                          {dataRead[0].email} 
                                </h4>
                                <h4 style={{color:"white", textAlign:"left", marginLeft:"10px"}}>  
                                          C.C. {dataRead[0].cedula}
                                </h4>
                                <h4 style={{color:"white", textAlign:"left", marginLeft:"10px"}}>  
                                          Tel/wpp: {dataRead[0].whatsapp}
                                </h4>
                                
                            </>

*/