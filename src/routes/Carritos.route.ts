import { Router } from 'express';
import Controller from '@controllers/Controller';
import Carritos from '@models/Carrito.models';
import obtenerCarrito from '@controllers/Carrito.controller';

const controller = new Controller(Carritos);

const router = Router();
router.post('/crear', controller.insertar);
router.get('/obtener', obtenerCarrito);
router.put('/actualizar/:id', (req, res) =>
  controller.actualizar(req, res, 'id', 'carrito actualizado correctamente')
);
router.delete('/eliminar/:id', (req, res) =>
  controller.eliminar(req, res, 'id')
);

export default router;
