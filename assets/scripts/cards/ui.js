'use strict'

const getCardsTemplate = require('../templates/get-cards.handlebars')

const getCardsSuccess = function (response) {
  if (response.cards.length === 0) {
    $('.message').text('You do not have any cards. Click Create Card to start.')
  } else {
    $('.message').hide()
  }
  console.log('response is:', response)
  const content = getCardsTemplate({ cards: response.cards })
  $('.content').html(content)
  $('#blurb').hide()
}

const getCardsFailure = function (error) {
  console.log('cards were not retrieved and error is:', error)
}

const createCardSuccess = function (data) {
  console.log('card created and data is', data)
  $('#addCard-modal').modal('hide')
  $('.add-card-modal').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('#card-form').trigger('reset')
}

const createCardFailure = function (error) {
  console.log('card not created and error is:', error)
}

const deleteCardSuccess = function (data) {
  // $(data.target).parent().remove()
  console.log('card deleted and data is:', data)
}

const deleteCardFailure = function (error) {
  console.log('could not delete error is:', error)
}

const updateCardSuccess = function (data) {
  console.log('card updated and data is:', data)
  $('.update-card-modal').modal('hide')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
}

const updateCardFailure = function (error) {
  console.log('update failed and error is:', error)
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
