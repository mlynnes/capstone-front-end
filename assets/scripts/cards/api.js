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

const createCard = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/cards',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateCard = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/cards/' + data.card.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteCard = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/cards/' + data.card.id,
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  getCards,
  createCard,
  updateCard,
  deleteCard
}
