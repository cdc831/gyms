const mysqlConexion = require('../models/conectar')

exports.getData = (req, res) => {
    mysqlConexion.query('SELECT * FROM gyms.tbl_usuarios', (error,rows,fields) => {
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
    mysqlConexion.query('SELECT * FROM gyms.tbl_usuarios WHERE id_usuarios = ?', [id], (error,rows,fields) => {
        if (error){
            console.log(error)
        }else{
            res.json(rows)
            mysqlConexion.close
        }
    })
}

exports.createRegister = (req, res) => {
    const sql = 'INSERT INTO gyms.tbl_usuarios SET ?';

    const tipoClasesObj = {
        user: req.body.user,
        pass: req.body.pass,
        tipo_level: req.body.tipo_level,
        estado: req.body.estado
    };

    mysqlConexion.query(sql,tipoClasesObj, (error) => {
        if (error) throw error;
        
        res.json({Mensaje: 'Registro insertado'})
        mysqlConexion.close
    })
}

exports.updateRegister = (req, res) => {
    const {id} = req.params;
    const {user,pass,tipo_level,estado} = req.body;
    const sql = `UPDATE gyms.tbl_usuarios SET user = '${user}', modalidad = '${pass}', tipo_level = '${tipo_level}', estado = '${estado}' WHERE id_usuarios = ${id}`;

    mysqlConexion.query(sql, (error) => {
        if (error) throw error;
        
        res.json({Mensaje: 'Registro actualizado'})
        mysqlConexion.close
    })
}

exports.deleteRegister = (req, res) => {
    const {id} = req.params;
    const sql = `DELETE FROM gyms.tbl_usuarios WHERE id_usuarios = ${id}`;

    mysqlConexion.query(sql, (error) => {
        if (error) throw error;
        
        res.json({Mensaje: 'Registro borrado'})
        mysqlConexion.close
    })
}