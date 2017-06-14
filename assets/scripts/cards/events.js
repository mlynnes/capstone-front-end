'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
// const store = require('../store.js')

const onGetCards = function (event) {
  event.preventDefault()
  api.getCards()
    .then(ui.getCardsSuccess)
    .catch(ui.getCardsFailure)
}

const onCreateCard = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createCard(data)
    .then(ui.createCardSuccess)
    .catch(ui.createCardFailure)
}

const addHandlers = () => {
  $('#create-card').on('submit', onCreateCard)
  $('#get-cards').on('submit', onGetCards)
}

module.exports = {
  addHandlers
}
