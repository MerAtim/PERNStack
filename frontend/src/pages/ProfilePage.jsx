import { useAuth } from '../context/AuthContext.jsx';
import { Card } from '../components/ui';

function ProfilePage() {
    const { user } = useAuth();

    if (!user) {
        return (
            <div className="h-[calc(100vh-200px)] flex items-center justify-center">
                <p className="text-gray-400">Cargando...</p>
            </div>
        );
    }

    return (
        <div className="h-[calc(100vh-200px)] flex items-center justify-center">
            <Card>
                <div className="flex flex-col items-center">
                    {/* Avatar del usuario (Gravatar) */}
                    {user.gravatar && (
                        <img
                            src={user.gravatar}
                            alt="Avatar"
                            className="w-32 h-32 rounded-full mb-6 border-4 border-sky-600"
                        />
                    )}

                    {/* Título */}
                    <h1 className="text-3xl font-bold text-white mb-6">
                        Mi Perfil
                    </h1>

                    {/* Información del usuario */}
                    <div className="w-full space-y-4">
                        {/* Nombre */}
                        <div className="bg-zinc-800 p-4 rounded-lg">
                            <p className="text-gray-400 text-sm mb-1">Nombre</p>
                            <p className="text-white text-lg font-semibold">
                                {user.name || 'Sin nombre'}
                            </p>
                        </div>

                        {/* Email */}
                        <div className="bg-zinc-800 p-4 rounded-lg">
                            <p className="text-gray-400 text-sm mb-1">Email</p>
                            <p className="text-white text-lg font-semibold">
                                {user.email || 'Sin email'}
                            </p>
                        </div>

                        {/* ID de usuario */}
                        <div className="bg-zinc-800 p-4 rounded-lg">
                            <p className="text-gray-400 text-sm mb-1">ID de Usuario</p>
                            <p className="text-gray-300 text-sm font-mono">
                                {user.id || 'N/A'}
                            </p>
                        </div>

                        {/* Fecha de registro */}
                        {user.fecha_registro && (
                            <div className="bg-zinc-800 p-4 rounded-lg">
                                <p className="text-gray-400 text-sm mb-1">Miembro desde</p>
                                <p className="text-gray-300">
                                    {new Date(user.fecha_registro).toLocaleDateString('es-AR', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default ProfilePage;