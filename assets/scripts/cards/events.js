'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

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
    .then(() => {
      api.getCards(data)
        .then(ui.getCardsSuccess)
        .catch(ui.getCardsFailure)
    })
    .catch(ui.createCardFailure)
}

const onDeleteCard = function (event) {
  event.preventDefault()
  const data = $(event.target).attr('data-id')
  api.deleteCard(data)
    .then(ui.deleteCardSuccess)
    .then(() => {
      api.getCards(data)
        .then(ui.getCardsSuccess)
        .catch(ui.getCardsFailure)
    })
    .catch(ui.deleteCardFailure)
}

const onUpdateCard = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  const data = getFormFields(event.target)
  data.card.id = id
  api.updateCard(data)
    .then(ui.updateCardSuccess)
    .then(() => {
      api.getCards(data)
        .then(ui.getCardsSuccess)
        .catch(ui.getCardsFailure)
    })
    .catch(ui.updateCardFailure)
}

const onUpdateClose = function (event) {
  onGetCards()
  $('.update-card-modal').modal('hide')
  $('body').removeClass('modal-open')
  $('modal-backdrop').remove()
}

module.exports = {
  onGetCards,
  onCreateCard,
  onDeleteCard,
  onUpdateCard,
  onUpdateClose
}
