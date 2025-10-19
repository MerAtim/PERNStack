import Router from 'express-promise-router';
import { signout, profile, signin, signup } from '../controllers/auth.controller.js';
import { isAuth } from "../middlewares/auth.middleware.js";

const router = new Router();

router.post('/signin', signin);

router.post('/signup', signup);

router.post('/signout', signout);

router.get('/profile', isAuth, profile);

export default router;