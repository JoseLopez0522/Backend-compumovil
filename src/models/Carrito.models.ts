import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const carritos = sequelize.define('carritos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  usuario_id:{
    type:DataTypes.INTEGER
  },
  productos_id:{
    type: DataTypes.INTEGER,
  }
});

export default carritos;
