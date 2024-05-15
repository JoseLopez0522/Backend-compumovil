import carritos from "@models/Carrito.models";
import Productos from "@models/Productos.models";

const obtenerCarrito = async (req, res) => {
    try {
        carritos.belongsTo(Productos, {foreignKey: "productos_id"})
        
        const response = await carritos.findAll({include: [{model: Productos}]});
        console.log(response);
        
        console.log(res, req, response);
        return res.status(200).json({ success: 'true', response });
      } catch (error) {
        console.log(error);
        
        return res.status(400).json({ success: false, error });
        
      }
}

export default obtenerCarrito