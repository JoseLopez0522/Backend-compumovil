import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Usuarios = sequelize.define('usuarios', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  nombre: {
    type: DataTypes.STRING(35),
    allowNull: false
  },

  apellidos: {
    type: DataTypes.STRING(30),
    allowNull: false
  },

  correo: {
    type: DataTypes.STRING(45),
    allowNull: false
  },

  password: {
    type: DataTypes.STRING(45),
    allowNull: false
  }
});
export default Usuarios;
