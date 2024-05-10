import { Router } from 'express';
import Usuarios from '@routes/Usuarios.route';
import carritos from '@routes/Carritos.route';
import Productos from '@routes/Productos.route';
import Pagos from '@routes/Pagos.route';
import formadepagos from '@routes/Formadepagos.route';
import payment from '@routes/Payment';
import { verifyAdmin } from '@middlewares/auth';

const router = Router();

router.use('/usuarios', Usuarios);
router.use('/carritos', verifyAdmin, carritos);
router.use('/productos', verifyAdmin, Productos);
router.use('/pagos', Pagos);
router.use('/Formadepagos', formadepagos);
router.use('/payment-sheet', payment);
export default router;
