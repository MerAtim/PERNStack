import { useState } from "react";
import { Card, Button, Modal } from "../ui";
import { useTareas } from "../../context/TareasContext";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

export function CardTareas({ tarea }) {
    const { eliminarTarea } = useTareas();
    const navigate = useNavigate();
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleDelete = async () => {
        console.log("Intentando eliminar tarea con ID:", tarea.id);
        console.log("Tarea completa:", tarea);
        try {
            await eliminarTarea(tarea.id);
            setShowDeleteModal(false);
        } catch (error) {
            console.error("Error al eliminar tarea:", error);
            console.error("Detalles del error:", error.response?.data);
            alert(`Error al eliminar: ${error.response?.data?.message || error.message}`);
        }
    };

    const handleEdit = () => {
        console.log("Navegando a editar tarea con ID:", tarea.id);
        navigate(`/tareas/editar/${tarea.id}`);
    };

    return (
        <>
            <Card className="py-4 px-7">
                <div className="mb-4">
                    <h1 className="text-2xl font-bold text-white mb-2">{tarea.titulo}</h1>
                    <p className="text-gray-400">{tarea.descripcion}</p>
                </div>
                <div className="flex justify-end gap-x-2">
                    <Button onClick={handleEdit} className="bg-sky-600 hover:bg-sky-500">
                        <FaPencil className="inline mr-2" />
                        Editar
                    </Button>
                    <Button
                        className="bg-red-500 hover:bg-red-600"
                        onClick={() => setShowDeleteModal(true)}
                    >
                        <FaTrashAlt className="inline mr-2" />
                        Eliminar
                    </Button>
                </div>
            </Card>

            <Modal
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={handleDelete}
                title="Eliminar tarea"
                message={`¿Estás seguro que querés eliminar la tarea "${tarea.titulo}"?`}
                confirmText="Eliminar"
                cancelText="Cancelar"
            />
        </>
    );
}

export default CardTareas;