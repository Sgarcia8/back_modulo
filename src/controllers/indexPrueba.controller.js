import { open } from '../db.js';

export const getPruebas = async (req, res) =>{
    try {
        const iddisciplina = req.body.iddisciplina;
        
        const sql = `SELECT * 
                    FROM prueba
                    WHERE iddisciplina = :iddisciplina`;
        const result = await open(sql, [iddisciplina], true);
        
        if (result.rows.length > 0) {
            res.status(200).json(result.rows);
        } else {
            res.status(404).json({ message: 'No se encontron pruebas' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las pruebas' });
    }
};