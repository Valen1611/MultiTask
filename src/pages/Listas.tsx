import { useState } from 'react';
import Categoria from '../components/Categoria';

export function ListasPage() {

  //////////////////////////////////////
  // Backend provisorio
  interface CategoriaProps {
    id: number;
    nombre: string;
    descripcion?: string;
    tareas?: string[];       // TODO: Cambiar a Tarea[]
    pendientes?: string[];   // TODO: Cambiar a Tarea[]
}

  let matematica: CategoriaProps = {
    id: 1,
    nombre: "Matematica",
    descripcion: "calculadora de derivadas: https://www.calculadora-de-derivadas.com/",
    tareas: ["guia derivadas", "guia integrales", "limites"]
  }

  let arquiSoftware: CategoriaProps = {
    id: 2,
    nombre: "Arqui de Software",
    tareas: ["leer roy fielding", "aprender REST", "aprender QAs"]
  }

  let BaseDeDatos: CategoriaProps = {
    id: 3,
    nombre: "Bases de Datos",
    tareas: ["normalizacion"]
  }

  //////////////////////////////////////
  
  let [categorias, setCategorias] = useState<CategoriaProps[]>([matematica, arquiSoftware, BaseDeDatos]);
  
  

  //setCategorias([matematica, arquiSoftware, BaseDeDatos]);

  function agregarTarea(tarea: string, idCategoria: number) {
    console.log("agregar tarea", tarea, "en", idCategoria);
    const categoriaActualizada = categorias?.map((categoria) => {
      console.log(categoria.id, idCategoria);
      if (categoria.id === idCategoria) {
        console.log("hola?")
        categoria.tareas?.push(tarea);
      }
      return categoria;
    });

    console.log("categoriaActualizada", categoriaActualizada);
    setCategorias(categoriaActualizada);
    
  }

  return (
    <div className="flex flex-col h-screen">
      <div className='flex flex-row flex-grow'>
        {categorias?.map((categoria, index) => (
          <Categoria  id={categoria.id}
                      nombre={categoria.nombre} 
                      descripcion={categoria.descripcion} 
                      tareas={categoria.tareas} 
                      key={index}
                      agregarTarea={agregarTarea}/>
        ))}
      </div>
  </div>
  );

}