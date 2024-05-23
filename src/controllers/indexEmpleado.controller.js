import {open} from '../db.js';

export const getEmpleados = async(req,res) =>{
    try {
        const sql = 'SELECT * FROM empleado';
        const result = await open(sql, [], true);

        if (result.rows.length > 0) {
            res.status(200).json(result.rows);
        } else {
            res.status(404).json({ message: 'No se encontraron empleados' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener empleados' });
    }
};


export const getEmpleadosByCorreoAndCargo = async (req, res) => {
    try {
        const correo = req.query.correo;
        // Consulta SQL para buscar empleado por correo electrónico
        const sql = `SELECT e.*, c.idtipocargo
                    FROM empleado e, cargo c, tipocargo tc 
                    WHERE e.correo = :correo 
                        AND e.codempleado = c.codempleado
                        AND c.idtipocargo = tc.idtipocargo
                        AND (tc.idtipocargo = 'ACL' OR tc.idtipocargo = 'AG')`;
        const result = await open(sql, { correo }, true);

        if (result.rows.length > 0) {
            res.status(200).json(result.rows);
        } else {
            res.status(404).json({ message: 'No se encontraron empleados' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener empleados' });
    }
}

export const createEmpleado = async (req, res) => {
    try {
        const { codeEmpleado, nomEmpleado, apellEmpleado, fechaNa, fechaIngre, fechaEgreso, correo } = req.body;

        const { row } = await pool.query(
            "INSERT INTO empleado (codempleado, nomempleado, apellempleado, fechanac, fechaingre, fechaegreso, correo) VALUES ($1, $2, $3, $4, $5, $6, $7)",
            [codeEmpleado, nomEmpleado, apellEmpleado, fechaNa, fechaIngre, fechaEgreso, correo]
        );

        res.status(201).json(row[0]);
    } catch (err) {
        return res.status[500].json({ err: err.menssage });
    }

}