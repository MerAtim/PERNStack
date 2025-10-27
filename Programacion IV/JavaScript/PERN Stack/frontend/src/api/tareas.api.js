import axios from "./axios"

export const crearTareaRequest = async (tarea) => axios.post("/tareas", tarea);

export const listarTareasRequest = () => axios.get("/tareas");

export const obtenerTareaRequest = (id) => axios.get(`/tareas/${id}`);

export const actualizarTareaRequest = (id, tarea) => axios.put(`/tareas/${id}`, tarea);

export const eliminarTareaRequest = (id) => axios.delete(`/tareas/${id}`);