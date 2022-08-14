import React from "react";
import Formulario from "./formularioInput";
import ListaDeTareas from "./liataDeTareas";
import { useState } from "react";


const Contenedor = () => {
   const [list, setList] = useState([''])

return (
    <div className="ContenedorTodoList">
        <Formulario list={list} setList={setList} />
        <ListaDeTareas list={list}/>
    </div>
 ) 
}  
export default Contenedor;