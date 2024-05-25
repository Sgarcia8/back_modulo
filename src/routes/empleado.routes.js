import { Router } from "express";
import { getEmpleados, getEmpleadosAG,getEmpleadosByCorreoAndCargo} from "../controllers/indexEmpleado.controller.js";


const empleadoRouter = Router();

empleadoRouter.get("/empleados", getEmpleados);
empleadoRouter.get("/empleadosAG", getEmpleadosAG);
empleadoRouter.post("/empleados", getEmpleadosByCorreoAndCargo);
//empleadosRouter.post("/empleados", createEmpleado);


export default empleadoRouter;