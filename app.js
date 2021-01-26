const express = require('express')
/* const mysql = require('mysql') */
const app = express()

//Configuracion
app.set('port', process.env.PORT || 3000)

//Middleware
app.use(express.json())

// Rutas
const homeRouter = require('./src/routers/home')
const tipoClasesRouter = require('./src/routers/tipoClases')
const clasesRouter = require('./src/routers/clases')
const alumnosRouter = require('./src/routers/alumnos')
const rutinasRouter = require('./src/routers/rutina')

app.use(homeRouter)
app.use(tipoClasesRouter)
app.use(clasesRouter)
app.use(alumnosRouter)
app.use(rutinasRouter)


app.listen(app.get('port'),() =>{
    console.log('Server OnLine - Port:3000');
})