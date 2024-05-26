import { Router } from "express";
import { getRequerimientos, getRequerimientosByAnalistC, getRequerimientosByAnalistG, updateRequerimiento } from "../controllers/indexRequerimiento.controller.js";

const requerimientRouter = Router();

requerimientRouter.get("/requerimientos", getRequerimientos);
requerimientRouter.post("/requerimientos", getRequerimientosByAnalistC);
requerimientRouter.post("/requerimientosag", getRequerimientosByAnalistG);
requerimientRouter.put("/requerimientos",updateRequerimiento);


export default requerimientRouter;