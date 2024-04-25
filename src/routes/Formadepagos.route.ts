import { Router } from 'express';
import Controller from '@controllers/Controller';
import formadepagos from '@models/Formadepagos.models';

const controller = new Controller(formadepagos);

const router = Router();
router.get('/obtener', controller.obtener);
router.put('/actualizar/:id', (req, res) =>
  controller.actualizar(req, res, 'id', 'carrito actualizado correctamente')
);
router.delete('/eliminar/:id', (req, res) =>
  controller.eliminar(req, res, 'id')
);

export default router;
