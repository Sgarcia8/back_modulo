import { Router } from "express";
import { getPerfiles } from "../controllers/indexPerfil.controller.js";

const perfilRouter = Router();

perfilRouter.post("/perfil", getPerfiles);


export default perfilRouter;