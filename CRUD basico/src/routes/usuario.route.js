import { Router } from "express";
import { validarUsuario } from "../controllers/usuario.controller";

const router = Router()

router.post('/Usuario/postUsuario', validarUsuario)

export default router