import {open} from '../db.js';

export const getDisciplinas = async(req,res) =>{
    try {
        const sql = 'SELECT * FROM disciplina';
        const result = await open(sql, [], true);

        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'No se encontraron disciplinas' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las disciplinas' });
    }
};