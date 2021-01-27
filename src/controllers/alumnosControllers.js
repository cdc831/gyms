const mysqlConexion = require('../models/conectar')

exports.getData = (req, res) => {
    mysqlConexion.query('SELECT * FROM gyms.tbl_alumno', (error,rows,fields) => {
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
    mysqlConexion.query('SELECT * FROM gyms.tbl_alumno WHERE id_alumno = ?', [id], (error,rows,fields) => {
        if (error){
            console.log(error)
        }else{
            res.json(rows)
            mysqlConexion.close
        }
    })
}

exports.createRegister = (req, res) => {
    const sql = 'INSERT INTO gyms.tbl_alumno SET ?';

    const tipoClasesObj = {
        nombre: req.body.nm_tipo_clases,
        apellido: req.body.modalidad,
        dni: req.body.nm_tipo_clases,
        direccion: req.body.nm_tipo_clases,
        telefono: req.body.nm_tipo_clases,
        correo: req.body.nm_tipo_clases,
        fecha_ingreso: req.body.nm_tipo_clases,
        comentario: req.body.nm_tipo_clases
    };

    mysqlConexion.query(sql,tipoClasesObj, (error) => {
        if (error) throw error;
        
        res.json({Mensaje: 'Registro insertado'})
        mysqlConexion.close
    })
}

exports.updateRegister = (req, res) => {
    const {id} = req.params;
    const {nombre,apellido,dni,direccion,telefono,correo,fecha_ingreso,comentario} = req.body;
    const sql = `UPDATE gyms.tbl_tipo_clases SET nombre = '${nombre}', apellido = '${apellido}', dni = '${dni}', direccion = '${direccion}', telefono = '${telefono}', correo = '${correo}', fecha_ingreso = '${fecha_ingreso}', comentario = '${comentario}' WHERE id_alumno = ${id}`;

    mysqlConexion.query(sql, (error) => {
        if (error) throw error;
        
        res.json({Mensaje: 'Registro actualizado'})
        mysqlConexion.close
    })
}

exports.deleteRegister = (req, res) => {
    const {id} = req.params;
    const sql = `DELETE FROM gyms.tbl_alumno WHERE id_alumno = ${id}`;

    mysqlConexion.query(sql, (error) => {
        if (error) throw error;
        
        res.json({Mensaje: 'Registro borrado'})
        mysqlConexion.close
    })
}