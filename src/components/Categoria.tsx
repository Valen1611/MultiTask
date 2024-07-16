import { useState } from "react";

function Categoria(props: CategoriaProps) {
    const [checked, setChecked] = useState(false);

    const handleButtonClick = () => {
        setChecked(!checked);
    };
    return (
        <div className="p-2 box-decoration-slice bg-sky-200 text-black rounded-lg shadow">
            {/*Nombre*/}
            <center>
                <div className="inline-block px-4 py-2 bg-white rounded-md shadow">
                    <span className="font-bold text-lg text-indigo-700">{props.nombre}</span>
                    <input  id="c1"
                            type="checkbox"
                            checked={checked}
                            className=" h-8 w-8 cursor-pointer rounded-lg border-lime-300 bg-lime-100 text-lime-600 focus:ring-lime-200"
                            onClick={() => {console.log("click en ", props.nombre)}} />
                </div>
            </center> 

            {/*Descripcion*/}
            <div className="box-decoration-slice">
                {props.descripcion}
            </div>
            
            {/*Tareas*/}
            <div>
                <ul>
                    {props.tareas?.map((tarea, index) => (
                        <>
                        {/* <div className="hover:bg-indigo-500">
                            <li key={index}> • {tarea} 
                            <input  id="c1"
                                    type="checkbox" 
                                    className="h-8 w-8 cursor-pointer rounded-lg border-lime-300 bg-lime-100 text-lime-600 focus:ring-lime-200"
                                    onClick={() => {console.log("click en ",tarea)}} />                             
                            </li>
                        </div> */}
                        <button className="flex justify-between items-center hover:bg-indigo-500 w-full text-left "
                                onClick={() => {setChecked(!checked)}}>
                            <li key={index} className="flex justify-between w-full items-center"> 
                            <span>• {tarea}</span> 
                            <input  id="c1"
                                    type="checkbox"
                                    checked={checked}
                                    className="h-8 w-8 cursor-pointer rounded-lg border-lime-300 bg-lime-100 text-lime-600 focus:ring-lime-200"
                                    onClick={() => {console.log("click en ",tarea)}} />                             
                            </li>
                        </button>
                        </>
                        
                    ))}
                </ul>
            </div>
            
        </div>
    );
}


interface CategoriaProps {
    nombre: string;
    descripcion?: string;
    tareas?: string[];       // TODO: Cambiar a Tarea[]
    pendientes?: string[];   // TODO: Cambiar a Tarea[]
}

export default Categoria;