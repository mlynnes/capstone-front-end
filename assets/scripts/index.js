'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const authEvents = require('./auth/events.js')
const cardEvents = require('./cards/events')

$(() => {
  authEvents.addHandlers()
})

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#view-card-btn').on('click', cardEvents.onGetCards)
  $('#card-form').on('submit', cardEvents.onCreateCard)
  $(document).on('submit', '.destroy', cardEvents.onDeleteCard)
  $(document).on('submit', '#card-form-update', cardEvents.onUpdateCard)
  $('#chng-pw-modal').hide()
  $('#sign-out-modal').hide()
  $('#sign-up-modal').show()
  $('#sign-in-modal').show()
  $('#view-card-btn').hide()
  $('#add-card-btn').hide()
  $('#blurb').hide()

  $('#signUp-modal').on('hidden.bs.modal', function () {
    $(this).find('form')[0].reset()
    $(this).find('h4').text('Sign Up')
  })
  $('#signIn-modal').on('hidden.bs.modal', function () {
    $(this).find('form')[0].reset()
    $(this).find('h4').text('Sign In')
  })
  $('#changePassword-modal').on('hidden.bs.modal', function () {
    $(this).find('form')[0].reset()
    $(this).find('h4').text('Change Password')
  })
  $('#addRestaurant-modal').on('hidden.bs.modal', function () {
    $(this).find('form')[0].reset()
  })
})
