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