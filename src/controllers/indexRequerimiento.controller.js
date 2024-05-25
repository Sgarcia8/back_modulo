import {open} from '../db.js';

export const getRequerimientos = async(req,res) =>{
    try {
        const sql = 'SELECT * FROM requerimiento where emp_codempleado IS NULL';
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
        console.log(empleado);
        const sql = `SELECT *
                    FROM requerimiento
                    WHERE emp_codempleadoag = :empleado`;
        const result = await open(sql, { empleado }, true);
        console.log(result)
        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'No se encontraron requerimientos' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los requerimientos' });
    }
};
export const updateRequerimientoAC = async (req, res) => {
    try{
        const {consecreque, emp_codempleadoac} = req.body;
        const sql = `UPDATE requerimiento
                    SET emp_codempleado = :emp_codempleadoac
                    WHERE consecreque = :consecreque`;
        const results = await open(sql,{emp_codempleadoac,consecreque},true);
        if(results.rowsAffected > 0){
            res.status(204).send();
        }else {
            res.status(404).json({message: 'No se encontro al analista general seleccionado'});
        }
    
    }catch (error) {
        res.status(500).json({ error: 'Error al enviar el correo' });
    }
};

export const updateRequerimientoAG = async (req, res) => {
    try{
        const {consecreque, emp_codempleadoag} = req.body;
        const sql = `UPDATE requerimiento
                    SET emp_codempleadoag = :emp_codempleadoag
                    WHERE consecreque = :consecreque`;
        const results = await open(sql,{emp_codempleadoag,consecreque},true);
        if(results.rowsAffected > 0){
            res.status(204).send();
        }else {
            res.status(404).json({message: 'No se encontro al analista general seleccionado'});
        }
    
    }catch (error) {
        res.status(500).json({ error: 'Error al enviar el correo' });
    }
};
