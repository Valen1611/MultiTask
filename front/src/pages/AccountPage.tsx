import { useEffect, useState } from "react";
import { getTareas, getCategorias } from "../apiService";
import React from "react";

export function AccountPage() {
  const [message, setMessage] = useState<string>('');
  const [tareas, setTareas] = useState<string>('');
  const [categorias, setCategorias] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {



        const tareasResult = await getTareas();
        const resultString = JSON.stringify(tareasResult, null, 2);
        setTareas(resultString);
        
        const categoriasResult = await getCategorias();
        const resultString2 = JSON.stringify(categoriasResult, null, 2);
        setCategorias(resultString2);


      } catch (error: any) {
        console.error("Error fetching data:", error);
        setMessage(error.message);
      }
    };

    fetchData();
  }, []);
  
    return (
      <div>
          <h1>Account</h1>
          <h2>tareas</h2>
          <pre>{tareas}</pre>

          <h2>categorias</h2>
          <pre>{categorias}</pre>
      </div>
    );
  
  }