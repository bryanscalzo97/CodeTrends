import express from 'express'
import TemasRoute from './routes/temas.route.js'

const app = express()
app.set('view engine', 'ejs')

app.use('/', TemasRoute)

app.listen(2022, function () {
  console.log('Hola Mundo')
})

// Necesito traer todos los temas a una vista:
// 1. Crear la vista
// 2. Routear la vista
// 3. MVC
// 4. Crear encabezado
