import { Router } from "express";
import { getHvbyCan } from "../controllers/indexHv.controller.js";

const hvRouter = Router();

hvRouter.get("/hv",getHvbyCan);

export default hvRouter;