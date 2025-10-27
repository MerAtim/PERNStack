import { Route, Routes,} from "react-router-dom"
import {Container} from "./components/ui/Container.jsx"
import { ProtectedRoute } from "./components/navbar/ProtectedRoute"
import { useAuth } from "./context/AuthContext"
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import TareasPage from './pages/TareasPage'
import TareaFormPage from './pages/TareaFormPage'
import NotFound from "./pages/NotFound"
import Navbar from "./components/navbar/NavBar"
function App() {
    const {isAuth} = useAuth();

    return (
        <>
            <Navbar/>
            <Container className="py-5">
                <Routes>
                    {/* Rutas PÚBLICAS - Siempre accesibles */}
                    <Route path='/' element={<HomePage/>} />
                    <Route path='/about' element={<AboutPage/>} />

                    {/* Rutas solo para NO LOGUEADOS - Redirige a /tareas si ya estás logueado */}
                    <Route element={<ProtectedRoute isAllowed={!isAuth} redirectTo="/tareas"/>}>
                        <Route path='/login' element={<LoginPage/>} />
                        <Route path='/register' element={<RegisterPage/>} />
                    </Route>

                    {/* Rutas solo para LOGUEADOS - Redirige a /login si no estás logueado */}
                    <Route element={<ProtectedRoute isAllowed={isAuth} redirectTo="/login"/>}>
                        <Route path='/profile' element={<ProfilePage/>} />
                        <Route path='/tareas' element={<TareasPage/>} />
                        <Route path='/tareas/crear' element={<TareaFormPage/>} />
                        <Route path='/tareas/editar/:id' element={<TareaFormPage/>} />
                    </Route>

                    {/* Ruta 404 - Cualquier otra URL */}
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </Container>
        </>
    )
}

export default App
