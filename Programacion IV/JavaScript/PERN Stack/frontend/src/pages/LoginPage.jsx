import { Card, Input, Button, Label } from "../components/ui"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";

function LoginPage() {
    const { register, handleSubmit} = useForm();
    const {signin, errors} = useAuth();
    const navigate = useNavigate();
    const onSubmit = handleSubmit( async (data) => {
    await signin(data);
    navigate('/profile');
    });
    return (
    <div className="h-[calc(100vh-10rem)] flex items-center justify-center">
        <Card>
            {
            errors && errors.length > 0 && errors.map((error, index) => (
                <div key={index} className="bg-red-500 text-white text-center mb-2 rounded-md">
                    {error}
                </div>
            ))
            }
            <h1 className="text-4xl font-bold my-2 text-center text-green-300">Iniciar Sesión</h1>
            <form onSubmit={onSubmit}>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" autoComplete="email" placeholder="Ingrese su email" {...register("email", { required: true })}/>
                <Label htmlFor="password">Contraseña</Label>
                <Input id="password" type="password" autoComplete="current-password" placeholder="Ingrese su contraseña" {...register("password", { required: true })}/>
                <Button type="submit">Ingresar</Button>
            </form>
            <div className="flex justify-between my-4 gap-2">
                <p className="text-gray-200 text-center">¿No tenes una cuenta?</p>
                <Link to="/register" className="text-blue-500 hover:underline">Registrate</Link>
            </div>
        </Card>
    </div>
    )
}

export default LoginPage