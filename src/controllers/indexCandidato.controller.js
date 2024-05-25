import { open } from '../db.js';

export const getCandidatos = async (req, res) => {
    try {
        const disciplina = req.body.disciplina;

        const sql = `SELECT * 
                    FROM candidato
                    WHERE iddisciplina =:disciplina`;
        const result = await open(sql, [disciplina], true);

        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'No se encontraron candidatos' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los candidatos' });
    }
};