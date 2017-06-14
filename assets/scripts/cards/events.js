'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
// const store = require('../store.js')

const onCreateCard = function (even) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createCard(data)
    .then(ui.createCardSuccess)
    .catch(ui.createCardFailure)
}

const addHandlers = () => {
  $('#create-card').on('submit', onCreateCard)
}

module.exports = {
  addHandlers
}
