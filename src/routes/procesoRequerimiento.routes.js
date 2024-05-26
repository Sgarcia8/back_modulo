import { Router } from "express";
import { 
    getProcesoRequerimiento,
    getCantProcesos,
    createProcesoRequerimiento,
    updateProcesoRequerimientoFechaIn,
    updateProcesoRequerimientoFechaFn,
    updateProcesoRequerimientoConvocatoria,
    updateProcesoRequerimientoInvitacion
} from "../controllers/indexProcesoRequerimiento.controller.js";

const procesoRequerimientoRouter = Router();

procesoRequerimientoRouter.post("/procesoRequerimientoG", getProcesoRequerimiento);
procesoRequerimientoRouter.get("/procesoRequerimiento",getCantProcesos);
procesoRequerimientoRouter.post("/procesoRequerimiento", createProcesoRequerimiento);
procesoRequerimientoRouter.put("/procesoRequerimientoIn", updateProcesoRequerimientoFechaIn);
procesoRequerimientoRouter.put("/procesoRequerimientoFn", updateProcesoRequerimientoFechaFn);
procesoRequerimientoRouter.put("/procesoRequerimientoCv", updateProcesoRequerimientoConvocatoria);
procesoRequerimientoRouter.put("/procesoRequerimientoIv", updateProcesoRequerimientoInvitacion);

export default procesoRequerimientoRouter;