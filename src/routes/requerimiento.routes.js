import { Router } from "express";
import { getRequerimientos, getRequerimientosByAnalistC, getRequerimientosByAnalistG, updateRequerimientoAG, updateRequerimientoAC } from "../controllers/indexRequerimiento.controller.js";

const requerimientRouter = Router();

requerimientRouter.get("/requerimientos", getRequerimientos);
requerimientRouter.post("/requerimientos", getRequerimientosByAnalistC);
requerimientRouter.post("/requerimientosag", getRequerimientosByAnalistG);
requerimientRouter.put("/requerimientosag",updateRequerimientoAG)
requerimientRouter.put("/requerimientos",updateRequerimientoAC);


export default requerimientRouter;