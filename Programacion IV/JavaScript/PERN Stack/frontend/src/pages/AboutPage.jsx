import { Card } from '../components/ui';
import BibliotecaCapy from '../assets/BibliotecaCapy.png';
import Capy from '../assets/Capy.png';
import Separador from '../assets/separador.png';

function AboutPage() {
    return (
        <div className="min-h-[calc(100vh-200px)] py-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <img src={BibliotecaCapy} alt="Biblioteca Capy" className="w-32 h-32 object-contain" />
                    </div>
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Sobre <span className="text-sky-500">Capy Tasks</span>
                    </h1>
                    <p className="text-xl text-gray-400">
                        Gestión de tareas simple y efectiva
                    </p>
                </div>

                {/* Descripción */}
                <Card>
                    <h2 className="text-2xl font-bold text-white mb-4">
                        ¿Qué es Capy Tasks?
                    </h2>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                        Capy Tasks es una aplicación web moderna de gestión de tareas diseñada para
                        ayudarte a organizar tu trabajo de manera eficiente. Con una interfaz intuitiva
                        y funcionalidades potentes, podés crear, editar y hacer seguimiento de todas
                        tus tareas en un solo lugar.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        Desarrollada como proyecto académico, Capy Tasks demuestra la implementación
                        de un stack tecnológico moderno y las mejores prácticas de desarrollo web.
                    </p>
                </Card>

                {/* Tecnologías */}
                <Card>
                    <h2 className="text-2xl font-bold text-white mb-6">
                        Tecnologías Utilizadas
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Frontend */}
                        <div>
                            <h3 className="text-sky-500 font-bold mb-3 text-lg">Frontend</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li><strong>React 19</strong> - Biblioteca UI</li>
                                <li><strong>Tailwind CSS</strong> - Estilos</li>
                                <li><strong>React Router</strong> - Navegación</li>
                                <li><strong>React Hook Form</strong> - Formularios</li>
                                <li><strong>Axios</strong> - Cliente HTTP</li>
                                <li><strong>Vite</strong> - Build tool</li>
                            </ul>
                        </div>

                        {/* Backend */}
                        <div>
                            <h3 className="text-sky-500 font-bold mb-3 text-lg">Backend</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li><strong>Node.js</strong> - Runtime</li>
                                <li><strong>Express</strong> - Framework</li>
                                <li><strong>PostgreSQL</strong> - Base de datos</li>
                                <li><strong>JWT</strong> - Autenticación</li>
                                <li><strong>Bcrypt</strong> - Encriptación</li>
                                <li><strong>Zod</strong> - Validación</li>
                            </ul>
                        </div>
                    </div>
                </Card>

                {/* Características */}
                <Card>
                    <h2 className="text-2xl font-bold text-white mb-6">
                        Características Principales
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                            <span className="text-2xl">🔐</span>
                            <div>
                                <h4 className="text-white font-bold mb-1">Autenticación Segura</h4>
                                <p className="text-gray-400 text-sm">Sistema completo de registro y login con JWT</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-2xl">📝</span>
                            <div>
                                <h4 className="text-white font-bold mb-1">Gestión de Tareas</h4>
                                <p className="text-gray-400 text-sm">Crear, editar y eliminar tareas fácilmente</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-2xl">👤</span>
                            <div>
                                <h4 className="text-white font-bold mb-1">Perfil Personal</h4>
                                <p className="text-gray-400 text-sm">Cada usuario tiene su propio espacio</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-2xl">🎨</span>
                            <div>
                                <h4 className="text-white font-bold mb-1">Diseño Moderno</h4>
                                <p className="text-gray-400 text-sm">Interfaz oscura y minimalista</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-2xl">📱</span>
                            <div>
                                <h4 className="text-white font-bold mb-1">Responsive</h4>
                                <p className="text-gray-400 text-sm">Funciona en cualquier dispositivo</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-2xl">⚡</span>
                            <div>
                                <h4 className="text-white font-bold mb-1">Rápido y Eficiente</h4>
                                <p className="text-gray-400 text-sm">Optimizado para mejor rendimiento</p>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* El Equipo */}
                <Card>
                    <h2 className="text-2xl font-bold text-white mb-4">
                        El Equipo Detrás de Capy Tasks
                    </h2>
                    <div className="text-center">
                        <div className="inline-block bg-zinc-800 px-8 py-6 rounded-lg border border-zinc-700">
                            <div className="flex justify-center mb-3">
                                <img src={Capy} alt="Carpincho" className="w-20 h-20 object-contain" />
                            </div>
                            <h3 className="text-2xl font-bold text-sky-500 mb-2">
                                Carpinchos Programando
                            </h3>
                            <p className="text-gray-400">
                                Estudiantes de la Tecnicatura Universitaria en Programación - UTN FRSR
                            </p>
                        </div>
                    </div>
                    <p className="text-gray-300 mt-6 text-center">
                        Proyecto desarrollado para la materia <strong className="text-white">Programación IV</strong>
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-6 text-gray-300">
                        <div className="text-center">
                            <span>Profesor: <strong className="text-white">Ariel Betancud</strong></span>
                        </div>
                        <img src={Separador} alt="Separador" className="w-5 h-5 object-contain" />
                        <div className="text-center">
                            <span>Tutor: <strong className="text-white">Daniel Guerrero</strong></span>
                        </div>
                    </div>
                </Card>

                {/* Footer*/}
                <div className="text-center mt-8 text-gray-500 text-sm">
                    <p>Hecho con 💙 por el equipo Carpinchos Programando</p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
