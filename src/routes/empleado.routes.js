import { Router } from "express";
import { getEmpleados, getEmpleadosByCorreoAndCargo} from "../controllers/indexEmpleado.controller.js";


const empleadoRouter = Router();

empleadoRouter.get("/empleados", getEmpleados);
empleadoRouter.get("/empleados/buscar", getEmpleadosByCorreoAndCargo);
//empleadosRouter.post("/empleados", createEmpleado);


export default empleadoRouter;