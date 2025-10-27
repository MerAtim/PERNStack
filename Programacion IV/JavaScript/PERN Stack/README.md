# Proyecto PERN Stack

## *Carpinchos Programando*

Aplicación web full-stack para gestión de tareas con autenticación de usuarios, desarrollada con **PostgreSQL, Express, React y Node.js**.

---

## Estructura del Proyecto

```
PERN Stack/
├── backend/                 # API REST con Express
│   ├── controllers/         # Lógica de negocio
│   ├── middlewares/         # Validaciones y autenticación
│   ├── router/             # Definición de rutas
│   ├── schemas/            # Validaciones con Zod
│   ├── libs/               # Utilidades (JWT)
│   ├── app.js              # Configuración de Express
│   ├── db.js               # Conexión a PostgreSQL
│   ├── index.js            # Punto de entrada
│   └── config.js           # Variables de entorno
├── frontend/               # Cliente React con Vite
│   ├── src/
│   │   ├── api/           # Configuración de Axios
│   │   ├── components/    # Componentes reutilizables
│   │   ├── context/       # Estado global (Auth, Tareas)
│   │   ├── pages/         # Vistas de la aplicación
│   │   └── App.jsx        # Configuración de rutas
├── database/              # Scripts SQL
│   └── init.sql          # Creación de tablas
└── README.md
```

---

## Tecnologías Utilizadas

### Backend

**PostgreSQL** - Base de datos relacional
```javascript
// backend/db.js
import pg from 'pg';

export const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    user: 'usuario',
    password: 'password',
    database: 'tareas_db',
});
```

**Express** - Framework para Node.js
```javascript
// backend/app.js
import express from "express";

const app = express();
app.use(express.json());

app.get("/api/ping", async (req, res) => {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows[0]);
});
```

**JWT** - Autenticación con tokens
```javascript
// backend/libs/jwt.js
import jwt from "jsonwebtoken";

export const createAccessToken = (payload) => {
    return jwt.sign(payload, "clave-secreta", { expiresIn: "1d" });
};
```

**Bcrypt** - Hash de contraseñas
```javascript
// backend/controllers/auth.controller.js
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
        "INSERT INTO usuarios (name, email, password) VALUES ($1, $2, $3)",
        [name, email, hashedPassword]
    );
};
```

### Frontend

**React** - Biblioteca para interfaces
```jsx
// frontend/src/App.jsx
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/tareas" element={<TareasPage />} />
        </Routes>
    );
}
```

**Context API** - Estado global
```jsx
// frontend/src/context/AuthContext.jsx
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

    return (
        <AuthContext.Provider value={{ user, isAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
```

**Axios** - Cliente HTTP
```javascript
// frontend/src/api/axios.js
import axios from "axios";

const client = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true
});

export default client;
```

**React Hook Form** - Manejo de formularios
```jsx
import { useForm } from "react-hook-form";

function LoginPage() {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        // Enviar datos al backend
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")} />
            <input {...register("password")} type="password" />
            <button type="submit">Iniciar Sesión</button>
        </form>
    );
}
```

---

## Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd "PERN Stack"
```

### 2. Configurar PostgreSQL
```sql
-- Crear base de datos
CREATE DATABASE tareas_db;

-- Ejecutar script de inicialización
\i database/init.sql
```

### 3. Configurar Backend
```bash
cd backend
npm install
```

Crear archivo `.env`:
```env
PORT=3000
PG_HOST=localhost
PG_PORT=5432
PG_USER=tu_usuario
PG_PASSWORD=tu_password
PG_DATABASE=tareas_db
JWT_SECRET=tu_clave_secreta
ORIGIN=http://localhost:5173
```

### 4. Configurar Frontend
```bash
cd frontend
npm install
```

### 5. Ejecutar la aplicación

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm run dev
```

---

## API Endpoints

### Autenticación

**Registro**
```http
POST /api/signup
Content-Type: application/json

{
    "name": "Juan Pérez",
    "email": "juan@example.com",
    "password": "password123"
}
```

**Login**
```http
POST /api/signin
Content-Type: application/json

{
    "email": "juan@example.com",
    "password": "password123"
}
```

**Perfil** (requiere autenticación)
```http
GET /api/profile
Cookie: token=<jwt-token>
```

**Logout**
```http
POST /api/signout
```

### Tareas (requieren autenticación)

**Listar todas las tareas**
```http
GET /api/tareas
```

**Obtener una tarea**
```http
GET /api/tareas/:id
```

**Crear tarea**
```http
POST /api/tareas
Content-Type: application/json

{
    "titulo": "Aprender PERN Stack",
    "descripcion": "Completar el proyecto de tareas"
}
```

**Actualizar tarea**
```http
PUT /api/tareas/:id
Content-Type: application/json

{
    "titulo": "Título actualizado",
    "descripcion": "Descripción actualizada"
}
```

**Eliminar tarea**
```http
DELETE /api/tareas/:id
```

---

## Ejemplos de Uso

### Crear una tarea desde el frontend
```javascript
// frontend/src/api/tareas.api.js
import axios from "./axios";

export const crearTarea = (tarea) =>
    axios.post("/tareas", tarea);

// En el componente
import { crearTarea } from "../api/tareas.api";

const handleSubmit = async (data) => {
    try {
        await crearTarea(data);
        console.log("Tarea creada exitosamente");
    } catch (error) {
        console.error(error);
    }
};
```

### Proteger rutas en el frontend
```jsx
// frontend/src/components/navbar/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ isAllowed, redirectTo }) => {
    if (!isAllowed) {
        return <Navigate to={redirectTo} replace />;
    }
    return <Outlet />;
};
```

---

## Características

- Autenticación con JWT y cookies HTTP-only
- CRUD completo de tareas por usuario
- Validación de datos con Zod
- Rutas protegidas en frontend y backend
- Integración con Gravatar para avatares
- Interfaz responsiva con Tailwind CSS
- Manejo de errores centralizado

---

## Autor

**Carpinchos Programando** - TUP Cuarto Semestre - Programación IV
