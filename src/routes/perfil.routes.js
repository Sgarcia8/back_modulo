import { Router } from "express";
import { getPerfiles } from "../controllers/indexPerfil.controller.js";

const perfilRouter = Router();

perfilRouter.get("/perfil", getPerfiles);


export default perfilRouter;