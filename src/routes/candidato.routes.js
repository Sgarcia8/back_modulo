import { Router } from "express";
import { getCandidatos } from "../controllers/indexCandidato.controller.js";

const candidatoRouter = Router();

candidatoRouter.get("/candidato", getCandidatos);

export default candidatoRouter;