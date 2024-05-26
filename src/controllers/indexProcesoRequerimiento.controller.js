import { open } from '../db.js';

export const getProcesoRequerimiento = async (req, res) => {
    try {
        const {codempleado, consecreque} = req.body;
        const sql = `SELECT * 
        FROM procesorequerimiento 
        WHERE codempleado = :codempleado 
            AND consecreque = :consecreque
            AND fechainicio IS NULL 
        ORDER BY idfase ASC 
        FETCH FIRST ROW ONLY`;

        const binds = { codempleado, consecreque }

        const result = await open(sql, binds, true);

        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json(404);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los procesos de los requerimientos' });
    }
};

export const getCantProcesos = async (req, res) => {
    try {

        const sql = 'select COUNT(consproceso) cons from procesorequerimiento';

        const result = await open(sql, [], true);

        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'No se encontraron procesos de requerimientos' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los procesos de los requerimientos' });
    }
}

export const createProcesoRequerimiento = async (req, res) => {
    try {
        const { consproceso, consecreque, codempleado, idfase, idperfil, fechaIn, fechaFn, convocatoria, invitacion } = req.body;

        const sql = `INSERT INTO procesorequerimiento (consproceso, consecreque, codempleado, idfase, idperfil, fechainicio, fechafin, convocatoria, invitacion) 
                    VALUES (:consproceso, :consecreque, :codempleado, :idfase, :idperfil, TO_DATE(:fechaIn, 'YYYY-MM-DD'), TO_DATE(:fechaFn, 'YYYY-MM-DD'), :convocatoria, :invitacion)`;

        const binds = { consproceso, consecreque, codempleado, idfase, idperfil, fechaIn, fechaFn, convocatoria, invitacion }

        const result = await open(sql, binds, true);
        if (result.rowsAffected > 0) {
            res.status(201).json({ message: 'Se creo correctamente el proceso requerimiento' });  // 201 Created
        } else {
            res.status(400).json({ message: 'No se pudo crear el proceso requerimiento' });
        }

    } catch (error) {
        return res.status(500).json({ error: 'Error al crear el proceso requerimiento' });
    }
};

export const updateProcesoRequerimientoFechaIn = async (req, res) => {
    try {
        const { consproceso, consecreque, codempleado, idfase, idperfil, fechaIn } = req.body;
        const sql = `UPDATE procesorequerimiento
                    SET fechainicio = TO_DATE(:fechaIn, 'YYYY-MM-DD')
                    WHERE consecreque = :consecreque
                        AND consproceso =:consproceso
                        AND codempleado = :codempleado
                        AND idfase = :idfase
                        AND idperfil = :idperfil`;

                        console.log(fechaIn);
        
        const binds = { consproceso, consecreque, codempleado, idfase, idperfil, fechaIn }

        const results = await open(sql, binds, true);
        if (results.rowsAffected > 0) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'No se encontro el proceso requerimiento buscado' });
        }

    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar proceso requerimiento ' });
    }
};

export const updateProcesoRequerimientoFechaFn = async (req, res) => {
    try {
        const { consproceso,consecreque, codempleado, idfase, idperfil, fechaFn } = req.body;
        const sql = `UPDATE procesorequerimiento
                    SET fechafin = TO_DATE(:fechaFn, 'YYYY-MM-DD')
                    WHERE consecreque = :consecreque
                        AND consproceso =:consproceso
                        AND codempleado = :codempleado
                        AND idfase = :idfase
                        AND idperfil = :idperfil`;
        const binds = { consproceso,consecreque, codempleado, idfase, idperfil, fechaFn }

        const results = await open(sql, binds, true);
        if (results.rowsAffected > 0) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'No se encontro el proceso requerimiento buscado' });
        }

    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar proceso requerimiento ' });
    }
};

export const updateProcesoRequerimientoConvocatoria = async (req, res) => {
    try {
        const { consproceso, consecreque, codempleado, idfase, idperfil, convocatoria } = req.body;
        const sql = `UPDATE procesorequerimiento
                    SET convocatoria = :convocatoria
                    WHERE consecreque = :consecreque
                        AND consproceso =:consproceso
                        AND codempleado = :codempleado
                        AND idfase = :idfase
                        AND idperfil = :idperfil`;


        const binds = { consproceso, consecreque, codempleado, idfase, idperfil, convocatoria };

        const results = await open(sql, binds, true);
        if (results.rowsAffected > 0) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'No se encontro el proceso requerimiento buscado' });
        }

    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar proceso requerimiento ' });
    }
};

export const updateProcesoRequerimientoInvitacion = async (req, res) => {
    try {
        const { consproceso, consecreque, codempleado, idfase, idperfil, invitacion } = req.body;
        const sql = `UPDATE procesorequerimiento
                    SET invitacion = :invitacion
                    WHERE consecreque = :consecreque
                        AND consproceso =:consproceso
                        AND codempleado = :codempleado
                        AND idfase = :idfase
                        AND idperfil = :idperfil`;


        const binds = { consproceso, consecreque, codempleado, idfase, idperfil, invitacion };

        const results = await open(sql, binds, true);
        if (results.rowsAffected > 0) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'No se encontro el proceso requerimiento buscado' });
        }

    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar proceso requerimiento ' });
    }
};