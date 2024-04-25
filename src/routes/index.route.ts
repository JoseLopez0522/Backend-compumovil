import { Router } from 'express';
import Usuarios from '@routes/Usuarios.route';
import carritos from '@routes/Carritos.route';
import Productos from '@routes/Productos.route';
import Pagos from '@routes/Pagos.route';
import formadepagos from '@routes/Formadepagos.route';

const router = Router();

router.use('/usuarios', Usuarios);
router.use('/carritos', carritos);
router.use('/productos', Productos);
router.use('/pagos', Pagos);
router.use('/Formadepagos', formadepagos);
export default router;
