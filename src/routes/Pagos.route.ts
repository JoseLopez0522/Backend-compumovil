import { Router } from 'express';
import Controller from '@controllers/Controller';
import Pagos from '@models/Pagos.models';

const controller = new Controller(Pagos);

const router = Router();
router.post('/crear', controller.insertar);
router.get('/obtener', controller.obtener);
router.put('/actualizar/:id', (req, res) =>
  controller.actualizar(req, res, 'id', 'carrito actualizado correctamente')
);
router.delete('/eliminar/:id', (req, res) =>
  controller.eliminar(req, res, 'id')
);

export default router;
