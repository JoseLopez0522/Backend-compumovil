import { Router } from 'express';
import Usuarios from '@models/Usuario.models';
import Controller from '@controllers/Controller';
import { sing, verifyAdmin } from '@middlewares/auth';

const controller = new Controller(Usuarios);

const checkAuth = async (req, res) => {
  const { correo, password } = req.body;
  if (!correo || !password) {
    return res
      .status(400)
      .json({ error: 'correo o contraseña no proporcionados' });
  }
  try {
    const usuario = await controller.modelo.findOne({
      where: { correo: correo }
    });
    if (!usuario) {
      throw { msg: 'Usuario no encontrado' };
    }

    const autenticacion = await usuario.authenticate(password);

    if (!autenticacion) {
      throw { msg: 'Contraseña incorrecta' };
    }
    if (autenticacion) {
      const { password, ...todo } = usuario.dataValues;
      const token = await sing(usuario.dataValues);
      return res.status(200).json({ success: true, response: { todo, token } });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
};

const router = Router();
router.post('/login', checkAuth);
router.post('/crear', controller.insertar);
router.get('/obtener', verifyAdmin, controller.obtener);
router.put('/actualizar/:id', verifyAdmin, (req, res) =>
  controller.actualizar(req, res, 'id', 'Usuario actualizado correctamente')
);
router.delete('/eliminar/:id', (req, res) =>
  controller.eliminar(req, res, 'id')
);

export default router;
