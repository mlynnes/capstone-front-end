'use strict'

const getCardsSuccess = function (data) {
  console.log('retrieved cards and data is:', data)
}

const getCardsFailure = function (error) {
  console.log('cards were not retrieved and error is:', error)
}

const createCardSuccess = function (data) {
  console.log('card created and data is', data)
}

const createCardFailure = function (error) {
  console.log('card not created and error is:', error)
}

const deleteCardSuccess = function (data) {
  console.log('card deleted and data is:', data)
}

const deleteCardFailure = function (error) {
  console.log('could not delete error is:', error)
}

const updateCardSuccess = function (data) {
  console.log('card updated and data is:', data)
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
