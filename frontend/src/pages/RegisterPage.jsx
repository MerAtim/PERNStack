import { Button, Card, Input, Label } from "../components/ui/index.js";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

//function RegisterPage() {
const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { signup, errors: setUserErrors } = useAuth();
    const navigate = useNavigate();
    const onSubmit = handleSubmit(async (data) => {
        const user = await signup(data);
        if (user) {
        navigate("/profile");
        }
    });
    return (
        <div className="h-[calc(100vh-10rem)] flex items-center justify-center">
        <Card>
            {setUserErrors &&
            setUserErrors.map((error, index) => (
                <p key={index} className="bg-red-500 text-white p-2">{error}</p>
            ))}
            <h3
            className="text-2xl bg-black p-4 font-bold mb-4 text-center my-2"
            style={{ color: "#fde047" }} // color amarillo text-yellow-300
            >
            Registro
            </h3>
            <form onSubmit={onSubmit}>
            <Label htmlFor="name">Nombre</Label>
            <Input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Ingrese su nombre"
                {...register("name", { required: true })}
            ></Input>
            {errors.name && (
                <span className="text-red-500">El nombre es obligatorio</span>
            )}
            <Label htmlFor="email">Email</Label>
            <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="Ingrese su email"
                {...register("email", { required: true })}
            ></Input>
            {errors.email && (
                <span className="text-red-500">El email es obligatorio</span>
            )}
            <Label htmlFor="password">Contraseña</Label>
            <Input
                id="password"
                type="password"
                autoComplete="new-password"
                placeholder="Ingrese su contraseña"
                {...register("password", { required: true })}
            ></Input>
            {errors.password && (
                <span className="text-red-500">La contraseña es obligatoria</span>
            )}
            <Button type="submit">Registrarse</Button>
            </form>
            <div className="flex justify-between my-4 gap-2">
            <p className="text-gray-200 text-center">¿Tenes una cuenta?</p>
            <Link to="/login" className="text-blue-500 hover:underline">
                Iniciar Sesión
            </Link>
            </div>
        </Card>
        </div>
    );
};

export default RegisterPage;
