import { Router, request, response, Request, Response} from 'express'

import { getStudents } from './controller/TurmaController';
import { saveStudent } from './controller/TurmaController';
import { getStudent } from './controller/TurmaController';
import { updateStudent } from './controller/TurmaController';
import { deleteStudent } from './controller/TurmaController';
import { registredStudent } from './controller/TurmaController';
 
const routes = Router()



routes.get('/Turma', getStudents)
routes.post('/Turma', saveStudent)
routes.get('/Turma/:id', getStudent)
routes.put('/Turma/:id', updateStudent)
routes.delete('/Turma/:id', deleteStudent)
routes.patch('/Turma/:id', registredStudent)
 
export default routes