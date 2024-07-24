import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

config(); // Cargar variables de entorno

const sequelize = new Sequelize(
  process.env.NAME_DB,       // Nombre de la base de datos
  process.env.USER_DB,       // Usuario de la base de datos
  process.env.PASSWORD_DB,   // Contraseña de la base de datos
  {
    host: process.env.HOST_DB,   // Host de la base de datos
    dialect: 'mssql',           // Dialecto especificado para SQL Server
    dialectOptions: {
      options: {
        encrypt: false, // Desactivar el cifrado si no es necesario
        trustServerCertificate: false, // Si no se utiliza un certificado de servidor confiable
      },
    },
  }
);

sequelize
  .authenticate()
  .then(() => console.log('Conectado correctamente a la base de datos'))
  .catch((err) => console.log('Error al conectar a la base de datos:', err));

export default sequelize;
