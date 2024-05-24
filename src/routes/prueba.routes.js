import { Router } from "express";
import { getPruebas } from "../controllers/indexPrueba.controller.js";

const pruebaRouter = Router();

pruebaRouter.get("/prueba",getPruebas);

export default pruebaRouter;