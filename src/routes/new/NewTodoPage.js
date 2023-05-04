import React from "react";
import { TodoForm } from "../../ui/TodoForm";

function NewTodoPage(){
    return(
        <TodoForm 
            label="Escribe tu nuevo Todo"
            submitText="Añadir"
            submitEvent={()=>console.log('Llamar a addTdo')}     
        />
    );
}

export {NewTodoPage};