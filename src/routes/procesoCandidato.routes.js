import { Router } from "express";
import { createProcesoCandidato } from "../controllers/indexProcesoCandidato.controller.js";

const procesoCandidatoRouter = Router();

procesoCandidatoRouter.post("/procesoCandidato", createProcesoCandidato);

export default procesoCandidatoRouter;