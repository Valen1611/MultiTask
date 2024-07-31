import { useState } from "react";
import AgregarTarea from "./AgregarTarea";
import { v4 as uuidv4 } from "uuid";
import { MdDelete } from "react-icons/md";
import { FiSquare, FiCheckSquare } from "react-icons/fi";

function Categoria(props: CategoriaProps) {
  const [checked, setChecked] = useState(false);
  const currentId = uuidv4();

  const handleButtonClick = (tarea: TareaProps) => {
    setChecked(!checked);
    tarea.hecha = !tarea.hecha;
  };

  return (
    <div className="p-2 box-decoration-slice bg-sky-200 text-black rounded-lg shadow">
      {/*Nombre*/}
      <center>
        <div className="inline-block px-4 py-2 bg-white rounded-md shadow">
          <span className="font-bold text-lg text-indigo-700">
            {props.nombre}
          </span>
        </div>
      </center>

      {/*Descripcion*/}
      <div className="box-decoration-slice">{props.descripcion}</div>

      {/*Tareas*/}
      <div>
        <ul>
          {props.tareas?.map((tarea, index) => (
            <div className="columns-2 flex">
              <button
                className="flex hover:bg-indigo-500 w-full text-left"
                onClick={() => {
                  handleButtonClick(tarea);
                }}
              >
                <li
                  key={index}
                  className="flex w-full items-center"
                >
                    {tarea.hecha ? 
                      <> 
                        <FiCheckSquare className="h-8 w-8 text-slate-700" /> 
                        <span className="text-left text-decoration-line: line-through text-slate-700">{tarea.nombre}</span> 
                      </>:
                      
                      <>
                        <FiSquare className="h-8 w-8" />
                        <span className="text-left ">{tarea.nombre}</span>                       
                      </>}
                      
                


                </li>
              </button>
              <MdDelete
                className="h-8 w-8"
                onClick={() => {
                  console.log("ELIMINAR ", tarea, props.id);
                  props.eliminarTarea(tarea.nombre, props.id);
                }}
              />
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
