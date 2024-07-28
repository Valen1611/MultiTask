import { useState } from "react";
import AgregarTarea from "./AgregarTarea";
import { v4 as uuidv4 } from 'uuid';


function Categoria(props: CategoriaProps) {
  const [checked, setChecked] = useState(false);
  const currentId = uuidv4();
  const handleButtonClick = () => {
    setChecked(!checked);
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
            <div className="columns-2 flex items-center">
              <input
                id={currentId}
                type="checkbox"
                className="h-8 w-8 cursor-pointer rounded-lg border-lime-300 bg-lime-100 text-lime-600 focus:ring-lime-200"
                onClick={() => {
                    console.log("ELIMINAR ", tarea, props.id);
                    props.eliminarTarea(tarea, props.id);
                }}
              />

              <button
                className="flex hover:bg-indigo-500 w-full text-left"
                onClick={() => {
                  setChecked(!checked);
                }}
                
              >
                <li
                  key={index}
                  className="flex justify-between w-full items-center"
                >
                  <span>• {tarea}</span>
                  <input
                    id={uuidv4()}
                    type="checkbox"
                    checked={checked}
                    className="h-8 w-8 cursor-pointer rounded-lg border-lime-300 bg-lime-100 text-lime-600 focus:ring-lime-200"
                    onChange={() => {
                      console.log("click en ", tarea);

                    }}
                  />
                </li>
              </button>
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

interface CategoriaProps {
  id: number;
  nombre: string;
  descripcion?: string;
  tareas?: string[]; // TODO: Cambiar a Tarea[]
  pendientes?: string[]; // TODO: Cambiar a Tarea[]
  agregarTarea: (tarea: string, idCateogoria: number) => void;
  eliminarTarea: (tarea: string, idCateogoria: number) => void;
}

export default Categoria;
