import {open} from '../db.js';

export const getRequerimientos = async(req,res) =>{
    try {
        const sql = 'SELECT * FROM requerimiento';
        const result = await open(sql, [], true);
        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'No se encontraron requerimientos' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los requerimientos' });
    }
};

export const getRequerimientosByAnalistC = async ({codeEmp}, res) => {
    try {
        const empleado = codeEmp;
        const sql = `SELECT *
                    FROM requerimiento
                    WHERE emp_codempleadoag = :empleado`;
        const result = await open(sql, { empleado }, true);
        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'No se encontraron requerimientos' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los requerimientos' });
    }
};

export const getRequerimientosByAnalistG = async (req, res) => {
    try {
        const empleado = req.body.codeEmp;
        const sql = `SELECT *
                    FROM requerimiento
                    WHERE emp_codempleadoag = :empleado`;
        const result = await open(sql, { empleado }, true);
        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'No se encontraron requerimientos' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los requerimientos' });
    }
};
export const updateRequerimiento = async (req, res) => {
    try{
        const {consecreque, emp_codempleadoac, emp_codempleadoag} = req.body;
        const sql = `UPDATE requerimiento
                    SET emp_codempleado = :emp_codempleadoac,
                    emp_codempleadoag = :emp_codempleadoag
                    WHERE consecreque = :consecreque`;
        const results = await open(sql,{consecreque,emp_codempleadoac, emp_codempleadoag},true);
        if(results.rowsAffected > 0){
            res.status(204).send();
        }else {
            res.status(404).json({message: 'No se encontro al analista general seleccionado'});
        }
    
    }catch (error) {
        res.status(500).json({ error: 'Error al enviar el correo' });
    }
};

