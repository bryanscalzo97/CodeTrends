import express from 'express'
import TemasRoute from './routes/temas.route.js'

const app = express()
app.set('view engine', 'ejs')
app.use('/', express.static('public'))
app.use(express.urlencoded({ extended: false }))// ParseBody cuando viene en formato urlencoded
app.use(express.json()) // ParseBody cuando viene en formato JSON
app.use('/', TemasRoute)

app.listen(2022, function () {

})
