import { useEffect, useState } from "react";
import { getHelloWorld } from "../apiService";
import React from "react";

export function AccountPage() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getHelloWorld();
        setMessage(result);
      } catch (error) {
        console.error("Error fetching data:", error);
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