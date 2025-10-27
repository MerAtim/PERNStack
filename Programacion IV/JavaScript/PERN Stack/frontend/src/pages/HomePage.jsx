import { useAuth } from '../context/AuthContext';
import { Card, Button } from '../components/ui';
import { Link } from 'react-router-dom';
import CapyNotebook from '../assets/CapyNotebook.png';
import CapyTareas from '../assets/CapyTareas.png';
import CarpinchoSandia from '../assets/CarpinchoSandia.png';
import CarpinchoLeyendo from '../assets/CarpinchoLeyendo.png';
import CapyTarea from '../assets/CapyTarea.png';

function HomePage() {
    const { isAuth, user } = useAuth();

    // Vista para usuarios NO logueados
    if (!isAuth) {
        return (
            <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4">
                <div className="text-center max-w-3xl w-full">
                    {/* Hero Section */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                        Bienvenido a <span className="text-sky-500">Capy</span> Tasks
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 px-2">
                        Organizá tus tareas de forma simple y efectiva.
                        Gestioná tu tiempo como un profesional.
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
                        <div className="bg-zinc-900 p-4 md:p-6 rounded-lg border border-zinc-700">
                            <div className="flex justify-center mb-2 md:mb-3">
                                <img src={CapyNotebook} alt="Capy Notebook" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                            </div>
                            <h3 className="text-white font-bold mb-1 md:mb-2 text-sm md:text-base">Creá Tareas</h3>
                            <p className="text-gray-400 text-xs md:text-sm">Organizá tu trabajo de manera eficiente</p>
                        </div>
                        <div className="bg-zinc-900 p-4 md:p-6 rounded-lg border border-zinc-700">
                            <div className="flex justify-center mb-2 md:mb-3">
                                <img src={CarpinchoLeyendo} alt="Carpincho Leyendo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                            </div>
                            <h3 className="text-white font-bold mb-1 md:mb-2 text-sm md:text-base">Seguí tu Progreso</h3>
                            <p className="text-gray-400 text-xs md:text-sm">Mantené el control de lo que hacés</p>
                        </div>
                        <div className="bg-zinc-900 p-4 md:p-6 rounded-lg border border-zinc-700 sm:col-span-2 md:col-span-1">
                            <div className="flex justify-center mb-2 md:mb-3">
                                <img src={CarpinchoSandia} alt="Carpincho Sandia" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                            </div>
                            <h3 className="text-white font-bold mb-1 md:mb-2 text-sm md:text-base">Mejorá tu Productividad</h3>
                            <p className="text-gray-400 text-xs md:text-sm">Alcanzá tus metas más rápido</p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                        <Link to="/register" className="w-full sm:w-auto">
                            <Button className="w-full sm:w-auto">Empezar Ahora</Button>
                        </Link>
                        <Link to="/login" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-6 py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-700 transition">
                                Iniciar Sesión
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // Vista para usuarios logueados (Dashboard)
    return (
        <div className="min-h-[calc(100vh-200px)] py-4 md:py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Saludo personalizado */}
                <div className="mb-6 md:mb-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                        ¡Hola, {user?.name || 'Usuario'}! 👋
                    </h1>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg">
                        Bienvenido de nuevo a tu espacio de trabajo
                    </p>
                </div>

                {/* Cards de acceso rápido */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                    {/* Card Tareas */}
                    <Link to="/tareas">
                        <Card>
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        Mis Tareas
                                    </h3>
                                    <p className="text-gray-400 mb-4">
                                        Ver y gestionar todas tus tareas
                                    </p>
                                    <span className="text-sky-500 hover:text-sky-400 font-semibold">
                                        Ver tareas →
                                    </span>
                                </div>
                                <div>
                                    <img src={CapyTareas} alt="Capy Tareas" className="w-16 h-16 object-contain" />
                                </div>
                            </div>
                        </Card>
                    </Link>

                    {/* Card Perfil */}
                    <Link to="/profile">
                        <Card>
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        Mi Perfil
                                    </h3>
                                    <p className="text-gray-400 mb-4">
                                        Ver tu información personal
                                    </p>
                                    <span className="text-sky-500 hover:text-sky-400 font-semibold">
                                        Ver perfil →
                                    </span>
                                </div>
                                <div>
                                    <img src={CapyTarea} alt="Capy Usuario" className="w-16 h-16 object-contain" />
                                </div>
                            </div>
                        </Card>
                    </Link>
                </div>

                {/* Acceso rápido a crear tarea */}
                <Card>
                    <div className="text-center py-4 md:py-6 px-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                            ¿Listo para ser más productivo?
                        </h3>
                        <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
                            Creá una nueva tarea y mantené tu trabajo organizado
                        </p>
                        <Link to="/tareas/crear">
                            <Button className="w-full sm:w-auto">
                                + Crear Nueva Tarea
                            </Button>
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default HomePage;
