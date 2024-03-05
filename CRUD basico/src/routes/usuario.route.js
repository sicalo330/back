import { Router } from "express";
import { postUsuario } from "../controllers/usuario.controller";

const router = Router()

router.post('usuario/postUsuario', postUsuario)

export default router