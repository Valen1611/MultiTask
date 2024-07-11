
function Categoria(props: CategoriaProps) {
    return (
        <div className="flex flex-col px-2 box-decoration-slice bg-sky-200 text-black rounded-lg shadow">
         <div className="p-2">
        <center>
            <div className="inline-block px-4 py-2 bg-white rounded-md shadow">
                <span className="font-bold text-lg text-indigo-700">{props.nombre}</span>
            </div>
        </center>
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button> */}
    </div>

        <div className="box-decoration-slice">
            {props.descripcion}
        </div>

            <div>
                <ul>
                    {props.tareas?.map((tarea, index) => (
                        <div className="hover:bg-indigo-500">
                            <li key={index}> • {tarea} 
                            <input  id="c1"
                                    type="checkbox" 
                                    className="h-8 w-8 cursor-pointer rounded-full border-lime-300 bg-lime-100 text-lime-600 focus:ring-lime-200"
                                    onClick={() => {console.log("click en ",tarea)}} />                             
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