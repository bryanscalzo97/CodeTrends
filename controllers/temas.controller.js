import * as TemasModel from '../services/temas.services.js'

function viewAll (req, res) {
  TemasModel.find()
    .then(function (temas) {
      res.render('temas', { temas })
    })
}

function viewOne (req, res) {
  const id = req.query.id
  // todo: recibir por params nombre y buscarlo por el nombre
  TemasModel.findByID(id)
    .then(function (tema) {
      if (tema.comentarios !== undefined) { res.render('tema', { tema }) } else { res.send('Este tema no tiene comentarios') };
    })
}

function viewComments (req, res) {
  const id = req.query.id
  res.render('comentarios', { id })
}

function addComment (req, res) {
  const comentario = req.body.name
  const id = req.query.id
  TemasModel.addComment(comentario, id)
    .then(function (tema) {
      console.log(tema)
      res.render('tema', { tema })
    })
}

function viewUsers (req, res) {
  TemasModel.viewUsers()
    .then(function (users) {
      if (users) {
        res.status(200).json(users)
      } else {
        res.status(404).json({ message: 'No se encontraron usuarios' })
      }
    })
}
function viewCategorias (req, res) {
  TemasModel.viewCategorias()
    .then(function (categorias) {
      if (categorias) {
        res.status(200).json(categorias)
      } else {
        res.status(404).json({ message: 'No se encontraron categorias' })
      }
    })
}

function newCategory (req, res) {
  const nameCategory = req.params.nameCategory

  TemasModel.newCategory(nameCategory)
    .then(function (category) {
      res.status(200).json(category)
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })
}

function updateCategory (req, res) {
  const id = req.params.idCategory
  const nueva = req.params.nameCategory
  TemasModel.updateCategory(id, nueva)
    .then(function (category) {
      res.status(200).json(category)
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })
}

function viewCommentsPerTheme (req, res) {
  const id = req.params.idTema
  TemasModel.ViewCommentsPerTheme(id)
    .then(function (comments) { res.status(200).json(comments) })
}

function addCommentPerTheme (req, res) {
  const id = req.params.idTema
  const comentario = req.params.nuevoComentario
  TemasModel.addCommentPerTheme(comentario, id)
    .then(function (comments) {
      res.status(201).json(comments)
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })
}

function removeTema (req, res) {
  const id = req.params.idTema
  TemasModel.removeTema(id)
    .then(function (tema) {
      res.status(200).json(tema)
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })
}

export default {
  viewAll,
  viewOne,
  viewComments,
  addComment,
  viewUsers,
  viewCategorias,
  newCategory,
  updateCategory,
  viewCommentsPerTheme,
  addCommentPerTheme,
  removeTema

}
