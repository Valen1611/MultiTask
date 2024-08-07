import { useState } from 'react';
import Categoria from '../components/Categoria';
import React from 'react';

export function ListasPage() {

  //////////////////////////////////////
  // Backend provisorio
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
  hecha: boolean;
}

  let matematica: CategoriaProps = {
    id: 1,
    nombre: "Matematica",
    descripcion: "calculadora de derivadas: https://www.calculadora-de-derivadas.com/",
    // tareas: ["guia derivadas", "guia integrales", "limites"]
    tareas: [{id: 1, nombre: "guia derivadas", hecha: false}, {id: 2, nombre: "guia integrales", hecha: false}, {id: 3, nombre: "limites", hecha: false}]
  }

  let arquiSoftware: CategoriaProps = {
    id: 2,
    nombre: "Arqui de Software",
    // tareas: ["leer roy fielding", "aprender REST", "aprender QAs"]
    tareas: [{id: 1, nombre: "leer roy fielding", hecha: false}, {id: 2, nombre: "aprender REST", hecha: false}, {id: 3, nombre: "aprender QAs", hecha: false}]
  }

  let BaseDeDatos: CategoriaProps = {
    id: 3,
    nombre: "Bases de Datos",
    // tareas: ["normalizacion"]
    tareas: [{id: 1, nombre: "normalizacion", hecha: false}]
  }

  let arquiSoftware2: CategoriaProps = {
    id: 2,
    nombre: "Arqui de Softwar222e",
    // tareas: ["leer roy fielding", "aprender REST", "aprender QAs"]
    tareas: [{id: 1, nombre: "leer roy fielding", hecha: false}, {id: 2, nombre: "aprender REST", hecha: false}, {id: 3, nombre: "aprender QAs", hecha: false}]
  }

  function _agregarTarea(tarea: string, idCategoria: number) {
    console.log("agregar tarea", tarea, "en", idCategoria);
    /// aca se llamaria al back para crear la tarea
    // 
  }

  //////////////////////////////////////
  
  let [categorias, setCategorias] = useState<CategoriaProps[]>([matematica, arquiSoftware, BaseDeDatos, arquiSoftware2]);
  
  

  //setCategorias([matematica, arquiSoftware, BaseDeDatos]);

  function agregarTarea(tarea: string, idCategoria: number) {
    console.log("agregar tarea", tarea, "en", idCategoria);
    const categoriaActualizada = categorias?.map((categoria) => {
      console.log(categoria.id, idCategoria);
      if (categoria.id === idCategoria) {
        console.log("hola?")
        _agregarTarea(tarea, idCategoria);
        categoria.tareas?.push({id: 0, nombre: tarea, hecha: false}); // provisorio
      }
      return categoria;
    });

    console.log("categoriaActualizada", categoriaActualizada);
    setCategorias(categoriaActualizada);
    
  }

  function eliminarTarea(tarea: string, idCategoria: number) {
    console.log("eliminar tarea", tarea, "en", idCategoria);
    const categoriaActualizada = categorias?.map((categoria) => {
      console.log(categoria.id, idCategoria);
      if (categoria.id === idCategoria) {
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


  // return (
  //   <div className="flex flex-col h-screen">
  //     <div className='flex flex-row flex-grow'>
  //       {categorias?.map((categoria, index) => (
  //         <Categoria  id={categoria.id}
  //                     nombre={categoria.nombre} 
  //                     descripcion={categoria.descripcion} 
  //                     tareas={categoria.tareas} 
  //                     key={index}
  //                     agregarTarea={agregarTarea}
  //                     eliminarTarea={eliminarTarea}/>
  //       ))}
  //     </div>
  // </div>
  // );
  return (
    <div className="h-full w-full">
      <div className='flex h-full w-full '>
        {categorias?.map((categoria, index) => (
           <div className='flex-grow' key={index}>
          <Categoria  id={categoria.id}
                      nombre={categoria.nombre} 
                      descripcion={categoria.descripcion} 
                      tareas={categoria.tareas} 
                      key={index}
                      agregarTarea={agregarTarea}
                      eliminarTarea={eliminarTarea}/>
            </div>
        ))}
      </div>
  </div>
  );

}