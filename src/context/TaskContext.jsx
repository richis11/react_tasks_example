import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/Tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function CreateTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        descripcion: task.descripcion,
      },
    ]);
  }

  function DeleteTask(taskId) {
    setTasks(tasks.filter((task) => taskId !== task.id));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        CreateTask,
        DeleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
