'use strict'

const config = require('../config')
const store = require('../store')

const getCards = () => {
  return $.ajax({
    url: config.apiOrigin + '/cards',
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const createCard = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/cards',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  getCards,
  createCard
}
