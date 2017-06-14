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

module.exports = {
  getCardsSuccess,
  getCardsFailure,
  createCardSuccess,
  createCardFailure
}
