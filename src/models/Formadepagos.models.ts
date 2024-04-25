import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const formadepagos = sequelize.define('formadepagos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  referencia: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  numerodetargeta: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  vencimiento: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  nombredeltitular: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  cvv: {
    type: DataTypes.STRING(45),
    allowNull: false
  }
});
export default formadepagos;
