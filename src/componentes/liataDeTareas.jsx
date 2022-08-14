import React from "react";
import CajaVerificacion from "./cajaVerificacion";

const ListaDeTareas = props => {
   const {list} = props
return (
    <div>
         {list.map(description => (
            <CajaVerificacion description={description}></CajaVerificacion>
          ))}
    </div>
 );
    
}; 

export default ListaDeTareas;