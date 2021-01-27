const mysqlConexion = require('../models/conectar')

exports.getData = (req, res) => {
    mysqlConexion.query('SELECT * FROM gyms.tbl_clases', (error,rows,fields) => {
        if (error){
            console.log(error);
        }else{
            res.json(rows);
            mysqlConexion.close
        }
    })
}

exports.getDatabyID = (req, res) => {
    const {id} = req.params;
    mysqlConexion.query('SELECT * FROM gyms.tbl_clases WHERE id_clases = ?', [id], (error,rows,fields) => {
        if (error){
            console.log(error)
        }else{
            res.json(rows)
            mysqlConexion.close
        }
    })
}

exports.createRegister = (req, res) => {
    const sql = 'INSERT INTO gyms.tbl_clases SET ?';

    const tipoClasesObj = {
        id_alumno: req.body.id_alumno,
        id_tipo_clase: req.body.id_tipo_clase,
        id_rutina: req.body.id_rutina,
        fecha: req.body.fecha,
        hora: req.body.hora
    };

    mysqlConexion.query(sql,tipoClasesObj, (error) => {
        if (error) throw error;
        
        res.json({Mensaje: 'Registro insertado'})
        mysqlConexion.close
    })
}

exports.updateRegister = (req, res) => {
    const {id} = req.params;
    const {id_alumno,id_tipo_clase,id_rutina,fecha,hora} = req.body;
    const sql = `UPDATE gyms.tbl_clases SET id_alumno = '${id_alumno}', id_tipo_clase = '${id_tipo_clase}', id_rutina = '${id_rutina}', fecha = '${fecha}', hora = '${hora}' WHERE id_clases = ${id}`;

    mysqlConexion.query(sql, (error) => {
        if (error) throw error;
        
        res.json({Mensaje: 'Registro actualizado'})
        mysqlConexion.close
    })
}

exports.deleteRegister = (req, res) => {
    const {id} = req.params;
    const sql = `DELETE FROM gyms.tbl_clases WHERE id_clases = ${id}`;

    mysqlConexion.query(sql, (error) => {
        if (error) throw error;
        
        res.json({Mensaje: 'Registro borrado'})
        mysqlConexion.close
    })
}