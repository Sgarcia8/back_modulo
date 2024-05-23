import {open} from '../db.js';

export const getPerfiles = async(req,res) =>{
    try {
        const disciplina = req.body.disciplina;

        const sql = 'SELECT * FROM perfil WHERE iddisciplina = :disciplina';
        const result = await open(sql, [disciplina], true);

        if (result.rows.length > 0) {
            res.status(200).json(result.rows);
        } else {
            res.status(404).json({ message: 'No se encontraron perfiles' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los perfiles' });
    }
};