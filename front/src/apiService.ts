import axios from 'axios';
import { CategoriaProps, TareaProps } from './components/Categoria';

const API_URL = 'http://localhost:3001'; // URL del back-end

export const getCategorias = async () => {
  try {
    const categorias = await axios.get(`${API_URL}/categorias`);
    return categorias.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getTareas = async () => {
  try {
    // const tareas = await axios.get(`${API_URL}/tareas`);
    
    
    const categoriasResponse = await axios.get(`${API_URL}/categorias`);
    const tareasResponse = await axios.get(`${API_URL}/tareas`);

    const categorias: CategoriaProps[] = categoriasResponse.data.map((categoria: any, index: number) => ({
      id: index + 1,
      nombre: categoria.nombrecategoria,
      descripcion: categoria.descripcion,
      tareas: [],
      pendientes: []
  }));

  const tareas: TareaProps[] = tareasResponse.data.map((tarea: any) => ({
      id: tarea.tareaID,
      nombre: tarea.nombretarea,
      categoria: tarea.categoria,
      hecha: tarea.hecha
  }));

  categorias.forEach(categoria => {
      categoria.tareas = tareas.filter(tarea => tarea.categoria === categoria.nombre);
      categoria.pendientes = categoria.tareas.filter(tarea => !tarea.hecha).map(tarea => tarea.nombre);
  });


    return categorias;

  }catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}


