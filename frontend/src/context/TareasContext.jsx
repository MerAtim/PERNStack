import { createContext, useContext, useState } from "react";
import {
    crearTareaRequest,
    listarTareasRequest,
    obtenerTareaRequest,
    actualizarTareaRequest,
    eliminarTareaRequest
} from "../api/tareas.api";

export const TareasContext = createContext();

export const useTareas = () => {
    const context = useContext(TareasContext);
    if (!context) {
        throw new Error("useTareas must be used within TareasProvider");
    }
    return context;
}

export function TareasProvider({ children }) {
    const [tareas, setTareas] = useState([]);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);

    const listarTareas = async () => {
        setLoading(true);
        try {
            const res = await listarTareasRequest();
            console.log("Tareas recibidas del backend:", res.data);
            setTareas(res.data);
            setErrors([]);
        } catch (error) {
            console.error("Error al listar tareas:", error);
            if (Array.isArray(error.response?.data)) {
                setErrors(error.response.data);
            } else {
                setErrors([error.response?.data?.message || "Error al listar tareas"]);
            }
        } finally {
            setLoading(false);
        }
    };

    const obtenerTarea = async (id) => {
        setLoading(true);
        try {
            const res = await obtenerTareaRequest(id);
            setErrors([]);
            return res.data;
        } catch (error) {
            console.log(error);
            if (Array.isArray(error.response?.data)) {
                setErrors(error.response.data);
            } else {
                setErrors([error.response?.data?.message || "Error al obtener tarea"]);
            }
        } finally {
            setLoading(false);
        }
    };

    const crearTarea = async (data) => {
        setLoading(true);
        try {
            const res = await crearTareaRequest(data);
            setTareas([...tareas, res.data]);
            setErrors([]);
            return res.data;
        } catch (error) {
            console.log(error);
            if (Array.isArray(error.response?.data)) {
                setErrors(error.response.data);
            } else {
                setErrors([error.response?.data?.message || "Error al crear tarea"]);
            }
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const actualizarTarea = async (id, data) => {
        setLoading(true);
        try {
            const res = await actualizarTareaRequest(id, data);
            setTareas(tareas.map(tarea => tarea.id === id ? res.data : tarea));
            setErrors([]);
            return res.data;
        } catch (error) {
            console.log(error);
            if (Array.isArray(error.response?.data)) {
                setErrors(error.response.data);
            } else {
                setErrors([error.response?.data?.message || "Error al actualizar tarea"]);
            }
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const eliminarTarea = async (id) => {
        setLoading(true);
        try {
            await eliminarTareaRequest(id);
            setTareas(tareas.filter(tarea => tarea.id !== id));
            setErrors([]);
        } catch (error) {
            console.log(error);
            if (Array.isArray(error.response?.data)) {
                setErrors(error.response.data);
            } else {
                setErrors([error.response?.data?.message || "Error al eliminar tarea"]);
            }
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return (
        <TareasContext.Provider value={{
            tareas,
            errors,
            loading,
            listarTareas,
            obtenerTarea,
            crearTarea,
            actualizarTarea,
            eliminarTarea,
            setErrors,
        }}>
            {children}
        </TareasContext.Provider>
    );
}
