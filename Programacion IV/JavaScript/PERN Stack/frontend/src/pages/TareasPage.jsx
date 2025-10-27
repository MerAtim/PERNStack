import { useEffect } from 'react';
import { useTareas } from '../context/TareasContext';
import { CardTareas } from '../components/tareas/CardTareas';
import { Button } from '../components/ui';
import { Link } from 'react-router-dom';

function TareasPage() {
    const { tareas, listarTareas, loading } = useTareas();

    useEffect(() => {
        listarTareas();
    }, []);

    if (loading) {
        return (
            <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
                <div className="text-center">
                    <div className="text-sky-500 text-4xl mb-4">⏳</div>
                    <p className="text-gray-400 text-lg">Cargando tareas...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-[calc(100vh-200px)] py-4 md:py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8">
                    <div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">Mis Tareas</h1>
                        <p className="text-gray-400 text-sm md:text-base">
                            {tareas.length === 0
                                ? "No tenés tareas todavía"
                                : `Tenés ${tareas.length} tarea${tareas.length !== 1 ? 's' : ''}`}
                        </p>
                    </div>
                    <Link to="/tareas/crear" className="w-full sm:w-auto">
                        <Button className="bg-sky-600 hover:bg-sky-500 w-full sm:w-auto whitespace-nowrap">
                            + Nueva Tarea
                        </Button>
                    </Link>
                </div>

                {/* Lista de tareas o estado vacío */}
                {tareas.length === 0 ? (
                    <div className="text-center py-8 md:py-16 px-4">
                        <div className="bg-zinc-900 rounded-lg p-6 md:p-12 border border-zinc-700">
                            <div className="text-4xl md:text-6xl mb-3 md:mb-4">📝</div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                                No hay tareas aún
                            </h3>
                            <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
                                Empezá a organizar tu trabajo creando tu primera tarea
                            </p>
                            <Link to="/tareas/crear" className="inline-block w-full sm:w-auto">
                                <Button className="bg-sky-600 hover:bg-sky-500 w-full sm:w-auto">
                                    Crear mi primera tarea
                                </Button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="grid gap-3 md:gap-4">
                        {tareas.map((tarea) => (
                            <CardTareas key={tarea.id} tarea={tarea} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default TareasPage;