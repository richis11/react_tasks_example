import React from "react";
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { CreateTask } = useContext(TaskContext);

  const HandleSubmit = (e) => {
    e.preventDefault();
    CreateTask({ title, descripcion });
    setTitle("");
    setDescripcion("");
  };
  return (
    <div className="max-w-md mx-auto  rounded-lg ">
      <form onSubmit={HandleSubmit} className="p-5 mb-4 bg-yellow-500">
        <h1 className="text-center text-2xl mb-3 ">CREAR NUEVA TAREA</h1>
        <input
          type="text"
          value={title}
          autoFocus
          placeholder="Escribe aqui tu tarea"
          className="p-3 w-full mb-2"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type="text"
          value={descripcion}
          placeholder="Escribir descripcion"
          className="p-3 w-full mb-2"
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button className="px-2 py-2 bg-green-500  rounded-md hover:bg-green-700 text-white">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
