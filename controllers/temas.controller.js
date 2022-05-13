import * as TemasModel from '../services/temas.services.js'

function viewAll (req, res) {
  TemasModel.find()
    .then(function (temas) {
      // res.status(200).json(temas)
      res.render('temas', { temas })
    })
}

export default {
  viewAll
}
