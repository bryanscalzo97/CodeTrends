import { conexion } from './database.js'
import { ObjectId } from 'mongodb'

async function find () {
  return conexion(async function (db) {
    const temas = await db.collection('temas').find({}).toArray()
    return temas
  })
}

async function findByID (id) {
  return conexion(async function (db) {
    const tema = await db.collection('temas').find({ _id: ObjectId(id) }).toArray()
    return tema[0]
    // TODO:
    // traer categorias referenciadas
  })
}

async function findCommentsById (id) {
  return conexion(async function (db) {
    const comments = await db.collection('temas').find({ _id: ObjectId(id) }).toArray()
    return comments[0].comentarios
  })
}

async function addComment (comentario, id) {
  return conexion(async function (db) {
    await db.collection('temas').updateOne({ _id: ObjectId(id) }, { $push: { comentarios: { _id: ObjectId(), comentario, usuario: 'anonimo' } } })
    const tema = await findByID(id)
    return tema
  })
}

// API
async function viewUsers () {
  return conexion(async function (db) {
    const users = await db.collection('usuarios').find({}).toArray()
    return users
  })
}

async function viewCategorias () {
  return conexion(async function (db) {
    const categorias = await db.collection('categorias').find({}).toArray()
    return categorias
  })
}

async function newCategory (nameCategory) {
  const newCategory = {
    nombre: nameCategory,
    _id: new ObjectId()
  }
  return conexion(async function (db) {
    const category = await db.collection('categorias').insertOne(newCategory)
    return category
  })
}

async function updateCategory (id, nueva) {
  return conexion(async function (db) {
    const category = await db.collection('categorias').replaceOne({ _id: ObjectId(id) }, { nombre: nueva })
    return category
  })
}

async function ViewCommentsPerTheme (id) {
  return conexion(async function (db) {
    const comments = await db.collection('temas').find({ _id: ObjectId(id) }).toArray()
    return comments[0].comentarios
  })
}

async function addCommentPerTheme (comentario, id) {
  return conexion(async function (db) {
    const comments = await db.collection('temas').updateOne({ _id: ObjectId(id) }, { $push: { comentarios: { _id: ObjectId(), comentario, usuario: 'anonimo' } } })
    return comments
  })
}

async function removeTema (id) {
  return conexion(async function (db) {
    const tema = await db.collection('temas').deleteOne({ _id: ObjectId(id) })
    return tema
  })
}

export {
  find,
  findByID,
  findCommentsById,
  addComment,
  viewUsers,
  viewCategorias,
  newCategory,
  updateCategory,
  ViewCommentsPerTheme,
  addCommentPerTheme,
  removeTema

}
