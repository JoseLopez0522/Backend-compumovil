import { Router } from 'express';
import Usuarios from '@models/Usuario.models';
import Controller from '@controllers/Controller';

const controller = new Controller(Usuarios);

const router = Router();
router.post('/crear', controller.insertar);
router.get('/obtener', controller.obtener);
router.put('/actualizar/:id', (req, res) =>
  controller.actualizar(req, res, 'id', 'Usuario actualizado correctamente')
);
router.delete('/eliminar/:id', (req, res) =>
  controller.eliminar(req, res, 'id')
);

export default router;
