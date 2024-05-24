import { Router } from "express";
import { 
    getProcesoRequerimiento,
    createProcesoRequerimiento,
    updateProcesoRequerimientoFechaIn,
    updateProcesoRequerimientoFechaFn,
    updateProcesoRequerimientoConvocatoria,
    updateProcesoRequerimientoInvitacion
} from "../controllers/indexProcesoRequerimiento.controller.js";

const procesoRequerimientoRouter = Router();

procesoRequerimientoRouter.get("/procesoRequerimiento", getProcesoRequerimiento);
procesoRequerimientoRouter.post("/procesoRequerimiento", createProcesoRequerimiento);
procesoRequerimientoRouter.put("/procesoRequerimientoIn", updateProcesoRequerimientoFechaIn);
procesoRequerimientoRouter.put("/procesoRequerimientoFn", updateProcesoRequerimientoFechaFn);
procesoRequerimientoRouter.put("/procesoRequerimientoCv", updateProcesoRequerimientoConvocatoria);
procesoRequerimientoRouter.put("/procesoRequerimientoIv", updateProcesoRequerimientoInvitacion);

export default procesoRequerimientoRouter;