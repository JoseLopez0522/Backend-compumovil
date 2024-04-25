import { Router } from 'express';
import Controller from '@controllers/Controller';
import Productos from '@models/Productos.models';

const controller = new Controller(Productos);

const router = Router();
router.post('/crear', controller.insertar);
router.get('/obtener', controller.obtener);
router.put('/actualizar/:id', (req, res) =>
  controller.actualizar(req, res, 'id', 'productos actualizado correctamente')
);
router.delete('/eliminar/:id', (req, res) =>
  controller.eliminar(req, res, 'id')
);

export default router;
