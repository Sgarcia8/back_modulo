import { Router } from "express";
import { getHvbyCan } from "../controllers/indexHv.controller.js";

const hvRouter = Router();

hvRouter.post("/hv",getHvbyCan);

export default hvRouter;