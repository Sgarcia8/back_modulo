import { open } from '../db.js';

export const createProcesoCandidato = async (req, res) =>{
    try {
        const { usuario, consproceso, consecreque, idfase, idperfil, fechaPre } = req.body;

        const sql = `INSERT INTO procesocandidato (usuario, consproceso, consecreque, codempleado, idfase, idperfil, fechaPre) 
                    VALUES (:usuario, :consproceso, :consecreque, :codempleado, :idfase, :idperfil, :fechaPre)`;

        const binds = { usuario, consproceso, consecreque, codempleado, idfase, idperfil, fechaPre }

        const result = await open(sql, binds, true);
        if (result.rowsAffected > 0) {
            res.status(201).json({ message: 'Se creo correctamente el proceso candidato' });  // 201 Created
        } else {
            res.status(400).json({ message: 'No se pudo crear el proceso candidato' });
        }

    } catch (error) {
        return res.status(500).json({ error: 'Error al crear el proceso candidato' });
    }
};