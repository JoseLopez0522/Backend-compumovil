import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Pagos = sequelize.define('Pagos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});
export default Pagos;
