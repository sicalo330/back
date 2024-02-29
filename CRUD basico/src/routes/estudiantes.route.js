import { Router } from 'express'

import { getEstudiantes, postEstudiantes, deleteEstudiantes, updateEstudiantes } from '../controllers/estudiantes.controller'

const router = Router()

router.get('/Estudiantes/GetEstudiantes', getEstudiantes )

router.post('/Estudiantes/PostEstudiante', postEstudiantes )

router.delete('/Estudiantes/DeleteEstudiante/:idEstudiante', deleteEstudiantes )

router.put('/Estudiantes/UpdateEstudiante', updateEstudiantes )

export default router