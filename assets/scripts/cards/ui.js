'use strict'

const getCardsTemplate = require('../templates/get-cards.handlebars')

const getCardsSuccess = function (response) {
  const content = getCardsTemplate({ cards: response.cards })
  $('.content').html(content)
  $('#blurb').hide()
}

const getCardsFailure = function () {
}

const createCardSuccess = function (data) {
  $('#addCard-modal').modal('hide')
  $('.add-card-modal').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('#card-form').trigger('reset')
}

const createCardFailure = function () {
}

const deleteCardSuccess = function (data) {
}

const deleteCardFailure = function () {
}

const updateCardSuccess = function (data) {
  $('.update-card-modal').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
}

const updateCardFailure = function () {
}

module.exports = {
  getCardsSuccess,
  getCardsFailure,
  createCardSuccess,
  createCardFailure,
  deleteCardSuccess,
  deleteCardFailure,
  updateCardSuccess,
  updateCardFailure
}
