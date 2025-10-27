import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { PrivateRoutes, PublicRoutes } from './Navigation.jsx';
import { Container } from "../ui/Container.jsx";
import { Modal } from "../ui/Modal.jsx";
import { useAuth } from "../../context/AuthContext";
import clsx from "clsx";
import Separador from "../../assets/separador.png";
import Capy from "../../assets/Capy.png";
import { FaSignOutAlt } from "react-icons/fa";

function Navbar({ children }) {
    const location = useLocation();
    const { isAuth, signout, user } = useAuth();
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        setShowLogoutModal(true);
        setMobileMenuOpen(false);
    };

    const handleConfirmLogout = () => {
        setShowLogoutModal(false);
        signout();
    };

    const handleCancelLogout = () => {
        setShowLogoutModal(false);
    };

    return (
        <>
            <nav className="bg-zinc-950 px-4 md:px-10 lg:px-20 py-4 md:py-7 shadow-md relative">
                <Container className="flex justify-between items-center py-2 md:py-3">
                    <div className="flex items-center gap-2 md:gap-3">
                        <img src={Separador} alt="Separador" className="w-5 h-5 md:w-8 md:h-8 object-contain" />
                        <Link to="/" className="flex items-center gap-1 md:gap-2">
                            <img src={Capy} alt="Capy" className="w-7 h-7 md:w-10 md:h-10 object-contain" />
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white hover:text-sky-400 transition">Capy Tasks</h1>
                        </Link>
                        <img src={Separador} alt="Separador" className="w-5 h-5 md:w-8 md:h-8 object-contain" />
                    </div>

                    {/* Botón hamburguesa para móviles */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Menú desktop */}
                    <ul className="hidden md:flex gap-x-4 items-center">
                        {isAuth ? (
                            <>
                                {PrivateRoutes.map(({ name, path, icon }) => (
                                    <li key={name}>
                                        <Link
                                            to={path}
                                            className={clsx(
                                                "flex items-center gap-x-2 px-4 py-2 rounded-lg transition duration-200 ease-in-out font-medium capitalize",
                                                location.pathname === path
                                                    ? "bg-sky-600 text-white hover:bg-sky-500"
                                                    : "text-slate-300 hover:bg-zinc-800 hover:text-white"
                                            )}
                                        >
                                            {icon}
                                            <span>{name}</span>
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <button
                                        className="flex items-center gap-x-2 px-4 py-2 rounded-lg text-slate-300 hover:bg-red-600 hover:text-white transition duration-200 ease-in-out font-medium capitalize"
                                        onClick={handleLogout}
                                    >
                                        <FaSignOutAlt />
                                        <span>Salir</span>
                                    </button>
                                </li>
                                <li className="flex gap-x-2 items-center justify-center">
                                    {user?.gravatar && (
                                        <img src={user.gravatar} alt="Avatar del usuario" className='h-8 w-8 rounded-full'/>
                                    )}
                                    <span className='font-medium text-white'>{user?.name}</span>
                                </li>
                            </>
                        ) : (
                            PublicRoutes.map(({ name, path, icon }) => (
                                <li key={name}>
                                    <Link
                                        to={path}
                                        className={clsx(
                                            "flex items-center gap-x-2 px-4 py-2 rounded-lg transition duration-200 ease-in-out font-medium capitalize",
                                            location.pathname === path
                                                ? "bg-red-400 text-white hover:bg-sky-500"
                                                : "text-slate-300 hover:bg-zinc-800 hover:text-white"
                                        )}
                                    >
                                        {icon}
                                        <span>{name}</span>
                                    </Link>
                                </li>
                            ))
                        )}
                    </ul>

                    {/* Menú móvil */}
                    {mobileMenuOpen && (
                        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-950 border-t border-zinc-800 shadow-lg z-50">
                            <ul className="flex flex-col p-4 gap-2">
                                {isAuth ? (
                                    <>
                                        {PrivateRoutes.map(({ name, path, icon }) => (
                                            <li key={name}>
                                                <Link
                                                    to={path}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className={clsx(
                                                        "flex items-center gap-x-2 px-4 py-3 rounded-lg transition duration-200 ease-in-out font-medium capitalize",
                                                        location.pathname === path
                                                            ? "bg-sky-600 text-white"
                                                            : "text-slate-300 hover:bg-zinc-800 hover:text-white"
                                                    )}
                                                >
                                                    {icon}
                                                    <span>{name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                        <li>
                                            <button
                                                className="w-full flex items-center gap-x-2 text-left px-4 py-3 rounded-lg text-slate-300 hover:bg-red-600 hover:text-white transition duration-200 ease-in-out font-medium capitalize"
                                                onClick={handleLogout}
                                            >
                                                <FaSignOutAlt />
                                                <span>Salir</span>
                                            </button>
                                        </li>
                                    </>
                                ) : (
                                    PublicRoutes.map(({ name, path, icon }) => (
                                        <li key={name}>
                                            <Link
                                                to={path}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className={clsx(
                                                    "flex items-center gap-x-2 px-4 py-3 rounded-lg transition duration-200 ease-in-out font-medium capitalize",
                                                    location.pathname === path
                                                        ? "bg-sky-600 text-white"
                                                        : "text-slate-300 hover:bg-zinc-800 hover:text-white"
                                                )}
                                            >
                                                {icon}
                                                <span>{name}</span>
                                            </Link>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    )}
                </Container>
            </nav>
            {children}

            {/* Modal de confirmación de logout */}
            <Modal
                isOpen={showLogoutModal}
                onClose={handleCancelLogout}
                onConfirm={handleConfirmLogout}
                title="Cerrar sesión"
                message="¿Estás seguro que querés cerrar sesión?"
                confirmText="Cerrar sesión"
                cancelText="Cancelar"
            />
        </>
    );
}

export default Navbar;