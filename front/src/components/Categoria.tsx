import { useState } from "react";
import AgregarTarea from "./AgregarTarea";
import { v4 as uuidv4 } from "uuid";
import { MdDelete } from "react-icons/md";
import { FiSquare, FiCheckSquare } from "react-icons/fi";
import React from "react";

function Categoria(props: CategoriaProps) {
  const [checked, setChecked] = useState(false);
  const currentId = uuidv4();

  const handleButtonClick = (tarea: TareaProps) => {
    setChecked(!checked);
    tarea.hecha = !tarea.hecha;
  };

  return (
    <div className="rows-2 px-0.5 ">
      {/*Nombre*/}
      <center>
        <h3 className="text-2xl font-bold text-white bg-indigo-600 rounded-md shadow-md p-1">
          {props.nombre}
        </h3>
      </center>

    <div className="p-2 h-full rounded-md shadow-md bg-gradient-to-b from-indigo-400 to-teal-500">

      {/*Descripcion*/}
      <div className="box-decoration-slice">{props.descripcion}</div>

      {/*Tareas*/}
      <div>
        <ul className="list-group">
          {props.tareas?.map((tarea, index) => (
            <div className="list-group-item !bg-teal-100 hover:!bg-teal-200 !outline-sky" >
                <li 
                  key={index}
                  className="column flex justify-between items-center "
                  onClick={() => {handleButtonClick(tarea);}}
                >
                    {tarea.hecha ? 
                      <> 
                        <FiCheckSquare className="h-8 w-8 text-slate-700" /> 
                        <h6 className=" text-decoration-line: line-through text-slate-700">{tarea.nombre}</h6> 
                      </>:
                      <>
                        <FiSquare className="h-8 w-8" />
                        <h6 className=" ">{tarea.nombre}</h6>                       
                      </>}
                      
                
              <MdDelete
                className="h-8 w-8 hover:bg-teal-100 rounded"
                onClick={() => {
                  console.log("ELIMINAR ", tarea, props.id);
                  props.eliminarTarea(tarea.nombre, props.id);
                }}
              />


                </li>
              
            </div>
          ))}
        </ul>
      </div>

      <div className="flex justify-center py-3">
        <AgregarTarea
          id={props.id}
          nombre={props.nombre}
          agregarTarea={props.agregarTarea}
        />
      </div>
    </div>
    </div>
  );
}
interface TareaProps {
  id: number;
  nombre: string;
  hecha: boolean;
}
interface CategoriaProps {
  id: number;
  nombre: string;
  descripcion?: string;
  tareas?: TareaProps[]; // TODO: Cambiar a Tarea[]
  pendientes?: string[]; // TODO: Cambiar a Tarea[]
  agregarTarea: (tarea: string, idCateogoria: number) => void;
  eliminarTarea: (tarea: string, idCateogoria: number) => void;
}

export default Categoria;
