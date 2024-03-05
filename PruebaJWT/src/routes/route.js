import { Router } from "express";
import jwt from "../../../CRUD basico/src/utils/jwt.js";

const router = Router()

router.get('/Calendario', jet.valiadteToken, getAlgo)