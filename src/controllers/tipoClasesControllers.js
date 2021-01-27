const mysqlConexion = require('../models/conectar')

exports.getData = (req, res) => {
    mysqlConexion.query('SELECT * FROM gyms.tbl_tipo_clases', (error,rows,fields) => {
        if (error){
            console.log(error)
        }else{
            res.json(rows)
            mysqlConexion.close
        }
    })
}

exports.getDatabyID = (req, res) => {
    const {id} = req.params;
    mysqlConexion.query('SELECT * FROM gyms.tbl_tipo_clases WHERE id_tipo_clases = ?', [id], (error,rows,fields) => {
        if (error){
            console.log(error)
        }else{
            res.json(rows)
            mysqlConexion.close
        }
    })
}

exports.createRegister = (req, res) => {
    const sql = 'INSERT INTO gyms.tbl_tipo_clases SET ?';

    const tipoClasesObj = {
        nm_tipo_clases: req.body.nm_tipo_clases,
        modalidad: req.body.modalidad
    };

    mysqlConexion.query(sql,tipoClasesObj, (error) => {
        if (error) throw error;
        
        res.json({Mensaje: 'Registro insertado'})
        mysqlConexion.close
    })
}

exports.updateRegister = (req, res) => {
    const {id} = req.params;
    const {nm_tipo_clases,modalidad} = req.body;
    const sql = `UPDATE gyms.tbl_tipo_clases SET nm_tipo_clases = '${nm_tipo_clases}', modalidad = '${modalidad}' WHERE id_tipo_clases = ${id}`;

    mysqlConexion.query(sql, (error) => {
        if (error) throw error;
        
        res.json({Mensaje: 'Registro actualizado'})
        mysqlConexion.close
    })
}

exports.deleteRegister = (req, res) => {
    const {id} = req.params;
    const sql = `DELETE FROM gyms.tbl_tipo_clases WHERE id_tipo_clases = ${id}`;

    mysqlConexion.query(sql, (error) => {
        if (error) throw error;
        
        res.json({Mensaje: 'Registro borrado'})
        mysqlConexion.close
    })
}