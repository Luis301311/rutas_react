import React, { useState, useEffect } from 'react';

export function Apifetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await fetch('http://localhost:3000/api/users');
        const response = await fetch('https://laboratorio-virtual-backend.onrender.com/api/users');
        if (!response.ok) {
          throw new Error('Error al realizar la solicitud');
        }
        const responseData = await response.json();
        setData(responseData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Datos de la API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
