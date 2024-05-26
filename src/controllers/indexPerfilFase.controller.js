import {open} from '../db.js';

export const getPerfilesFase = async(req,res) =>{
    try {
        const idPerfil = req.body.idPerfil;

        const sql = 'SELECT * FROM perfilfase WHERE idperfil = :idPerfil';
        const result = await open(sql, [idPerfil], true);

        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'No se encontraron perfiles' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los perfiles' });
    }
};