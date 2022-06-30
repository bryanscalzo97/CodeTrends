import express from 'express'
import temasController from '../controllers/temas.controller.js'

const route = express.Router()

// Todo: estas son urls, por lo tanto deben ser amigables, es decir lanzar la consulta con el nombre como dice en el enunciado
route.get('/', temasController.viewAll)
route.get('/ver', temasController.viewOne)
route.get('/comentario', temasController.viewComments)
route.post('/create', temasController.addComment)

route.get('/api/usuarios', temasController.viewUsers)
route.get('/api/categorias', temasController.viewCategorias)
route.post('/api/categorias/nueva/:nameCategory', temasController.newCategory)

// Todo: aca los id antes del :idCategoria no deberia ir, igual que el nueva por ser un verbo
route.patch('/api/categorias/id/:idCategory/nueva/:nameCategory', temasController.updateCategory)
route.get('/api/Temas/id/:idTema', temasController.viewCommentsPerTheme)
route.post('/api/Temas/id/:idTema/comentario/:nuevoComentario', temasController.addCommentPerTheme)
route.delete('/api/Temas/:idTema', temasController.removeTema)

export default route
