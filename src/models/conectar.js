const mysql = require('mysql')

const conexion = mysql.createConnection({
    host: '192.168.0.149',
    database: 'gyms',
    user: 'root',
    password: '1559753'
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Base de datos Conectada');
    }
});

module.exports = conexion