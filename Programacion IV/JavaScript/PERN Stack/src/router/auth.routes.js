import { Router } from 'express';
import { logout, profile, singin, singup } from '../controllers/auth.controller.js';
const router = new Router();

router.post('/singin', singin);

router.post('/singup', singup);

router.post('/logout', logout);

router.get('/profile', profile);

export default router;