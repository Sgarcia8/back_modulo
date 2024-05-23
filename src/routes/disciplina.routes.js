import { Router } from "express";
import { getDisciplinas } from "../controllers/indexDisciplina.controller.js";

const disciplinaRouter = Router();

disciplinaRouter.get("/disciplinas",getDisciplinas);


export default disciplinaRouter;