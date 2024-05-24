import { open } from '../db.js';

export const getProcesoRequerimiento = async (req, res) => {
    try {
        const codempleado = req.body.codempleado;

        const sql = 'SELECT * FROM procesorequerimiento WHERE codempleado = :codempleado';
        
        const result = await open(sql, [codempleado], true);

        if (result.rows.length > 0) {
            res.status(200).json(result.rows);
        } else {
            res.status(404).json({ message: 'No se encontraron procesos de requerimientos' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los procesos de los requerimientos' });
    }
};

export const createProcesoRequerimiento = async (req, res) => {
    try {
        const { consproceso, consecreque, codempleado, idfase, idperfil } = req.body;

        const sql = `INSERT INTO procesorequerimiento (consproceso, consecreque, codempleado, idfase, idperfil) 
                    VALUES (:consproceso, :consecreque, :codempleado, :idfase, :idperfil)`;

        const binds = { consproceso, consecreque, codempleado, idfase, idperfil }

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
    try{
        const { consecreque, codempleado, idfase, idperfil, fechaIn } = req.body;
        const sql = `UPDATE procesorequerimiento
                    SET fechainicio = :fechaIn
                    WHERE consecreque = :consecreque
                        AND codempleado = :codempleado
                        AND idfase = :idfase
                        AND idperfil = :idperfil`;

        const binds = {consecreque, codempleado, idfase, idperfil, fechaIn}
        
        const results = await open(sql,binds,true);
        if(results.rowsAffected > 0){
            res.status(204).send();
        }else {
            res.status(404).json({message: 'No se encontro el proceso requerimiento buscado'});
        }
    
    }catch (error) {
        res.status(500).json({ error: 'Error al actualizar proceso requerimiento ' });
    }
};

export const updateProcesoRequerimientoFechaFn = async (req, res) => {
    try{
        const { consecreque, codempleado, idfase, idperfil, fechafn } = req.body;
        const sql = `UPDATE procesorequerimiento
                    SET fechafin = :fechafn
                    WHERE consecreque = :consecreque
                        AND codempleado = :codempleado
                        AND idfase = :idfase
                        AND idperfil = :idperfil`;

        const binds = {consecreque, codempleado, idfase, idperfil, fechafn}

        const results = await open(sql,binds,true);
        if(results.rowsAffected > 0){
            res.status(204).send();
        }else {
            res.status(404).json({message: 'No se encontro el proceso requerimiento buscado'});
        }
    
    }catch (error) {
        res.status(500).json({ error: 'Error al actualizar proceso requerimiento ' });
    }
};

export const updateProcesoRequerimientoConvocatoria = async (req, res) => {
    try{
        const { consecreque, codempleado, idfase, idperfil, convocatoria } = req.body;
        const sql = `UPDATE procesorequerimiento
                    SET convocatoria = :convocatoria
                    WHERE consecreque = :consecreque
                        AND codempleado = :codempleado
                        AND idfase = :idfase
                        AND idperfil = :idperfil`;

        const binds = {consecreque, codempleado, idfase, idperfil, convocatoria};

        const results = await open(sql,binds,true);
        if(results.rowsAffected > 0){
            res.status(204).send();
        }else {
            res.status(404).json({message: 'No se encontro el proceso requerimiento buscado'});
        }
    
    }catch (error) {
        res.status(500).json({ error: 'Error al actualizar proceso requerimiento ' });
    }
};

export const updateProcesoRequerimientoInvitacion = async (req, res) => {
    try{
        const { consecreque, codempleado, idfase, idperfil, invitacion } = req.body;
        const sql = `UPDATE procesorequerimiento
                    SET invitacion = :invitacion
                    WHERE consecreque = :consecreque
                        AND codempleado = :codempleado
                        AND idfase = :idfase
                        AND idperfil = :idperfil`;

        const binds = {consecreque, codempleado, idfase, idperfil, invitacion};

        const results = await open(sql,binds,true);
        if(results.rowsAffected > 0){
            res.status(204).send();
        }else {
            res.status(404).json({message: 'No se encontro el proceso requerimiento buscado'});
        }
    
    }catch (error) {
        res.status(500).json({ error: 'Error al actualizar proceso requerimiento ' });
    }
};