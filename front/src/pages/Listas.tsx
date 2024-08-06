import { useEffect, useState } from 'react';
import Categoria from '../components/Categoria';
import React from 'react';
import { getCategorias, getTareas } from '../apiService';


interface CategoriaProps {
  id: number;
  nombre: string;
  descripcion?: string;
  tareas?: TareaProps[];       // TODO: Cambiar a Tarea[]
  pendientes?: string[];   // TODO: Cambiar a Tarea[]
}

interface TareaProps {
id: number;
nombre: string;
categoria: string;
hecha: boolean;
}



export function ListasPage() {

  //////////////////////////////////////
  // Backend 

  

  let [categorias, setCategorias] = useState<CategoriaProps[]>([]);
  let [tareas, setTareas] = useState<CategoriaProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tareasResult = await getTareas();
        setTareas(tareasResult);
        setCategorias(tareasResult);

      } catch (error: any) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  

  
  //////////////////////////////////////
  
  
  
  
  function _agregarTarea(tarea: string, nombreCategoria: string) {
    console.log("agregar tarea", tarea, "en", nombreCategoria);
    /// aca se llamaria al back para crear la tarea



    // 
  }

  //setCategorias([matematica, arquiSoftware, BaseDeDatos]);

  function agregarTarea(tarea: string, nombreCategoria: string) {
    console.log("agregar tarea", tarea, "en", nombreCategoria);
    const categoriaActualizada = categorias?.map((categoria) => {
      console.log(categoria.nombre, nombreCategoria);
      if (categoria.nombre === nombreCategoria) {
        console.log("hola?")
        _agregarTarea(tarea, nombreCategoria);
        categoria.tareas?.push({id: 0, nombre: tarea, categoria: nombreCategoria, hecha: false}); // provisorio
      }
      return categoria;
    });

    console.log("categoriaActualizada", categoriaActualizada);
    setCategorias(categoriaActualizada);
    
  }

  function eliminarTarea(tarea: string, nombreCategoria: string) {
    console.log("eliminar tarea", tarea, "en", nombreCategoria);
    const categoriaActualizada = categorias?.map((categoria) => {
      console.log(categoria.nombre, nombreCategoria);
      if (categoria.nombre === nombreCategoria) {
        console.log("hola?")
        const index = categoria.tareas?.findIndex((t: TareaProps) => t.nombre === tarea) ?? -1;

        if (index !== -1) {
          categoria.tareas?.splice(index, 1);
        }
        
      }
      return categoria;
    });

    console.log("categoriaActualizada", categoriaActualizada);
    setCategorias(categoriaActualizada);
    
  }


  return (
    <div className="flex flex-col h-screen">
      <div className='flex flex-row flex-grow'>
        {categorias?.map((categoria, index: React.Key | null | undefined) => (
          <Categoria  id={categoria.id}
                      nombre={categoria.nombre} 
                      descripcion={categoria.descripcion} 
                      tareas={categoria.tareas} 
                      key={index}
                      agregarTarea={agregarTarea}
                      eliminarTarea={eliminarTarea}/>
        ))}
      </div>
  </div>
  );

}