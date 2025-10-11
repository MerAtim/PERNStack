import Router from 'express-promise-router';
import { singout, profile, singin, singup } from '../controllers/auth.controller.js';
import { isAuth } from "../middlewares/authmiddleware.js";

const router = new Router();

router.post('/singin', singin);

router.post('/singup', singup);

router.post('/singout', singout);

router.get('/profile', isAuth, profile);

export default router;