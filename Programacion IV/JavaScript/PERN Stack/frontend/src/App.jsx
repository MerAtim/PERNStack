import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import TareaFormPage from "./pages/TareaFormPage.jsx";
import TareasPage from "./pages/TareasPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";


function App() {
return (
<Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/tareas" element={<TareasPage />} />
    <Route path="/tareas/crear" element={<TareaFormPage />} />
    <Route path="/tareas/editar/:id" element={<TareaFormPage />} />
    <Route path="/profile" element={<ProfilePage />} />
</Routes>
);
}
export default App;
