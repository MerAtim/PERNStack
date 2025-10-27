import { Card, Input, Textarea, Label, Button } from "../components/ui";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useTareas } from "../context/TareasContext";
import { useEffect } from "react";

function TareaFormPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();
    const navigate = useNavigate();
    const { id } = useParams();
    const { crearTarea, actualizarTarea, obtenerTarea, errors: tareasErrors, setErrors } = useTareas();

    const isEditMode = !!id;

    useEffect(() => {
        if (isEditMode) {
            loadTarea();
        }
        // Limpiar errores al montar el componente
        setErrors([]);
    }, [id]);

    const loadTarea = async () => {
        try {
            const tarea = await obtenerTarea(id);
            if (tarea) {
                setValue("titulo", tarea.titulo);
                setValue("descripcion", tarea.descripcion || "");
            }
        } catch (error) {
            console.error("Error al cargar tarea:", error);
        }
    };

    const onSubmit = handleSubmit(async (data) => {
        try {
            if (isEditMode) {
                await actualizarTarea(id, data);
            } else {
                await crearTarea(data);
            }
            navigate("/tareas");
        } catch (error) {
            console.error("Error al guardar tarea:", error);
        }
    });

    return (
        <div className="flex min-h-[calc(100vh-200px)] justify-center items-center py-8">
            <Card className="w-full max-w-2xl">
                {tareasErrors.length > 0 && (
                    <div className="mb-4">
                        {tareasErrors.map((error, index) => (
                            <p className="bg-red-500 text-white p-2 rounded mb-2" key={index}>
                                {error}
                            </p>
                        ))}
                    </div>
                )}

                <h2 className="text-3xl font-bold my-4 text-white">
                    {isEditMode ? "Editar Tarea" : "Nueva Tarea"}
                </h2>

                <form onSubmit={onSubmit}>
                    <div className="mb-4">
                        <Label htmlFor="titulo">Título</Label>
                        <Input
                            id="titulo"
                            type="text"
                            placeholder="Título de la tarea"
                            autoComplete="off"
                            autoFocus
                            {...register("titulo", { required: true })}
                        />
                        {errors.titulo && (
                            <p className="text-red-500 text-sm mt-1">El título es requerido</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <Label htmlFor="descripcion">Descripción</Label>
                        <Textarea
                            id="descripcion"
                            placeholder="Descripción de la tarea (opcional)"
                            rows={3}
                            {...register("descripcion")}
                        />
                    </div>

                    <div className="flex gap-2">
                        <Button type="submit" className="bg-sky-600 hover:bg-sky-500">
                            {isEditMode ? "Actualizar" : "Crear"}
                        </Button>
                        <Button
                            type="button"
                            className="bg-zinc-700 hover:bg-zinc-600"
                            onClick={() => navigate("/tareas")}
                        >
                            Cancelar
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
}

export default TareaFormPage;