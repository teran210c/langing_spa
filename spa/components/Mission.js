import React from 'react';

function NewSection() {
  return (
    <div className="bg-[#fefef0] p-32 text-center">
      <div className="max-w-md mx-auto bg-[#fefef0] shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          <p className="text-gray-800 text-lg font-medium">
            ¡Bienvenido a Nuestra Nueva Sección!
          </p>
        </div>
        <div className="p-4">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => alert('Botón presionado!')}
          >
            Haz clic aquí
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewSection;