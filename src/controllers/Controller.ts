class Controller {
  modelo: any;
  constructor(modelo: any) {
    this.modelo = modelo;
  }

  insertar = async (req: any, res: any) => {
    try {
      const response = await this.modelo.create(req.body);
      console.log(response);
      
      console.log(res, req, response);
      return res.status(200).json({ success: 'true', response });
    } catch (error) {
      return res.status(400).json({ success: false, error });
      
    }
  };
  obtener = async (req: any, res: any) => {
    try {
      const response = await this.modelo.findAll();
      return res.status(200).json({ success: 'true', response });
    } catch (error) {
      return res.status(400).json({ error });
    }
  };
  actualizar = async (
    req: any,
    res: any,
    variable: string,
    mensaje: string
  ) => {
    const id = req.params[variable];

    try {
      const response = await this.modelo.update(req.body, {
        where: { [variable]: id }
      });
      return res.status(200).json({ success: 'true', response, msg: mensaje });
    } catch (error) {
      return res.status(400).json({ error });
    }
  };
  eliminar = async (req: any, res: any, variable: string) => {
    const id = req.params[variable];
    try {
      const response = await this.modelo.destroy({
        where: { [variable]: id }
      });
      return res.status(200).json({ success: 'true', response });
    } catch (error) {
      return res.status(400).json({ error });
    }
  };
  private servicio = async () => {};
}
export default Controller;
