'use strict'

const createCardSuccess = (data) => {
  console.log('card created and data is', data)
}

const createCardFailure = (error) => {
  console.log('card not created and error is:', error)
}

module.exports = {
  createCardSuccess,
  createCardFailure
}
