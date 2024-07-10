
function Categoria(props: CategoriaProps) {
    return (
        <div className="flex flex-col px-2 box-decoration-slice bg-gradient-to-b from-indigo-600 to-pink-500 border-4 border-black text-white">
            
            <div className="flex justify-between items-center">
                {props.nombre}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
            </div>

        <div className="box-decoration-slice border-2 border-black">
            {props.descripcion}
        </div>

            <div className="px-4 flex-grow ">
                <ul>
                    {props.tareas?.map((tarea, index) => (
                        <div className="hover:bg-indigo-500">
                            <li key={index}> • {tarea}  
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => {console.log("click en ",tarea)}}
                                    >.</button>
                            </li>

                        </div>
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