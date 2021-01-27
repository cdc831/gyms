const conexion = require('../models/conectar');
const mysqlConexion = require('../models/conectar')

exports.getData = (req, res) => {
     mysqlConexion.query('SELECT * FROM gyms.tbl_rutina', (error,rows,fields) => {
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
    mysqlConexion.query('SELECT * FROM gyms.tbl_rutina WHERE id_rutina = ?', [id], (error,rows,fields) => {
        if (error){
            console.log(error)
        }else{
            res.json(rows)
            mysqlConexion.close
        }
    })
}

exports.createRegister = (req, res) => {
    const sql = 'INSERT INTO gyms.tbl_rutina SET ?';

    const tipoClasesObj = {
        nm_rutina: req.body.nm_rutina,
        cantidad: req.body.cantidad,
        precio: req.body.precio
    };

    mysqlConexion.query(sql,tipoClasesObj, (error) => {
        if (error) throw error;
        
        res.json({Mensaje: 'Registro insertado'})
        mysqlConexion.close
    })
}

exports.updateRegister = (req, res) => {
    const {id} = req.params;
    const {nm_rutina,cantidad,precio} = req.body;
    const sql = `UPDATE gyms.tbl_rutina SET nm_rutina = '${nm_rutina}', cantidad = '${cantidad}', precio = '${precio}' WHERE id_rutina = ${id}`;

    mysqlConexion.query(sql, (error) => {
        if (error) throw error;
        
        res.json({Mensaje: 'Registro actualizado'})
        mysqlConexion.close
    })
}

exports.deleteRegister = (req, res) => {
    const {id} = req.params;
    const sql = `DELETE FROM gyms.tbl_rutina WHERE id_rutina = ${id}`;

    mysqlConexion.query(sql, (error) => {
        if (error) throw error;
        
        res.json({Mensaje: 'Registro borrado'})
        mysqlConexion.close
    })
}