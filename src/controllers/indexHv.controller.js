import { open } from '../db.js';

export const getHvbyCan = async(req,res) =>{
    try {
        const usuario = req.body.usuario;
        
        const sql = `SELECT * 
                    FROM hv
                    WHERE usuario = :usuario`;
        const result = await open(sql, [usuario], true);
        
        if (result.rows.length > 0) {
            res.status(200).json(result.rows);
        } else {
            res.status(404).json({ message: 'No se encontro la hv' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la hv' });
    }
};