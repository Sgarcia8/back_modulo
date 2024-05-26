import { Router } from "express";
import { getPerfilesFase } from "../controllers/indexPerfilFase.controller.js";

const perfilFaseRouter = Router();

perfilFaseRouter.post('/perfilfase',getPerfilesFase);

export default perfilFaseRouter;