import {pool} from "../db.js"
import bcrypt from "bcrypt"
import { createAccessToken } from "../libs/jwt.js";

export const singin = (req, res) => res.send('Ingreso exitoso!');

export const singup = async (req, res) => {
    const { name, email, password } = req.body;
    try {

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    
        const result = await pool.query(
            "INSERT INTO usuarios (name, email, password) VALUES ($1, $2, $3) RETURNING *",
            [name, email, hashedPassword]
        );
        const token = await createAccessToken({ id: result.rows[0].id });
        console.log(result);
        res.cookie("Token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "none",
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });
        return res.json({ user: result.rows[0], token });
    } catch (err) {
        if (err === "23505"){
            return res.status(400).json("El correo ya existe en la base de datos");
        }
    }
};

export const logout = (req, res) => res.send('Log out exitoso!');

export const profile = (req, res) => res.send("Perfil del usuario");