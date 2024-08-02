import { useEffect, useState } from "react";
import { getHelloWorld } from "../apiService";
import React from "react";

export function AccountPage() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getHelloWorld();
        console.log("result", result);
        const resultString = JSON.stringify(result, null, 2);

        setMessage(resultString);
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

          <h2>{message}</h2>
      </div>
    );
  
  }