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