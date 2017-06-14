'use strict'

const config = require('../config')
const store = require('../store')

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

module.exports = {
  createCard
}
