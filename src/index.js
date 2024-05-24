import express from 'express';
import { PORT } from "./config.js";
import morgan from "morgan";
import cors from "cors";

import empleadoRouter from './routes/empleado.routes.js';
import requerimientRouter from './routes/requerimiento.routes.js';
import disciplinaRouter from './routes/disciplina.routes.js';
import perfilRouter from './routes/perfil.routes.js';
import procesoRequerimientoRouter from './routes/procesoRequerimiento.routes.js';

const app = express();

app.use(morgan("dev"));
app.use(cors());
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(empleadoRouter);
app.use(requerimientRouter);
app.use(disciplinaRouter);
app.use(perfilRouter);
app.use(procesoRequerimientoRouter);

app.listen(PORT);