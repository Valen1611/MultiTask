
function Categoria(props: CategoriaProps) {
    return (
        <div className="bg-red-300">
            {props.nombre}
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