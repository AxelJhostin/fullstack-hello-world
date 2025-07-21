// frontend/app/page.tsx
'use client'; // ¡Importante! Esto lo convierte en un Componente de Cliente

import { useState, useEffect } from 'react';

export default function Home() {
  // Estado para guardar el mensaje que viene del backend
  const [message, setMessage] = useState('Cargando...');

  useEffect(() => {
    // Hacemos la llamada a nuestra API de FastAPI que está corriendo localmente
    fetch('https://fullstack-hello-world-backend.onrender.com/api/message')
      .then((res) => res.json())
      .then((data) => {
        // Guardamos el mensaje en nuestro estado
        setMessage(data.message);
      })
      .catch(() => {
        setMessage('Error al cargar el mensaje desde el backend');
      });
  }, []); // El array vacío asegura que esto se ejecute solo una vez

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Mensaje del Backend:</h1>
      <p className="mt-4 text-2xl text-blue-500 bg-gray-100 p-4 rounded-lg">
        {message}
      </p>
    </main>
  );
}