import axios from 'axios';

const API_URL = 'http://localhost:3001'; // URL del back-end

export const getHelloWorld = async () => {
  try {
    const response = await axios.get(`${API_URL}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
