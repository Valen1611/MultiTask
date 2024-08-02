import axios from 'axios';

const API_URL = 'http://localhost:3001'; // URL del back-end

export const getHelloWorld = async () => {
  try {
    const tareas = await axios.get(`${API_URL}/tareas`);
    //const categorias = await axios.get(`${API_URL}/categorias`);
    
    const response = {
      tareas: tareas.data,
      //categorias: categorias.data
    }

    return response.tareas;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
