import { Router } from "express";
import { getRequerimientos, getRequerimientosByAnalistC, updateRequerimientoAG } from "../controllers/indexRequerimiento.controller.js";

const requerimientRouter = Router();

requerimientRouter.get("/requerimientos", getRequerimientos);
requerimientRouter.get("/requerimientos/analista", getRequerimientosByAnalistC);
requerimientRouter.put("/requerimientos",updateRequerimientoAG);


export default requerimientRouter;