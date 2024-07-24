import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';
import useBcrypt from 'sequelize-bcrypt';
const Usuarios = sequelize.define('usuarios', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(35),
    allowNull: false,
  },
  apellidos: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), // Utiliza CURRENT_TIMESTAMP por defecto
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), // Utiliza CURRENT_TIMESTAMP por defecto
    allowNull: true, // Permitir NULL en updatedAt
  }
}, {
  schema: 'compumovil',
  tableName: 'usuarios',
  timestamps: true, // Si quieres que Sequelize maneje automáticamente las marcas de tiempo
  createdAt: 'createdAt', // Renombra el campo si es necesario
  updatedAt: 'updatedAt'  // Renombra el campo si es necesario
});


useBcrypt(Usuarios, {
  field: 'password',
  rounds: 12,
  compare: 'authenticate'
});
export default Usuarios;