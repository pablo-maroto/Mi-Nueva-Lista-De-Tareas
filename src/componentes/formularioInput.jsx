import React from "react";
import { useState } from "react";
import "./formularioInput.css"

const Formulario = props => {
   const {list,setList} = props
   const [description, setDescription] = useState('');
   
   const addDescriptionToList = props => {
      setList([...list, description])
   };

return (
   <div>
   <input className="inputStyle" type= 'text' value={description} 
   onChange= {event => setDescription(event.target.value)} >
      
   </input>

   <button className="buttonStyle" onClick={addDescriptionToList} >Agregar</button>
   </div>
   
 );
    
};


export default Formulario;