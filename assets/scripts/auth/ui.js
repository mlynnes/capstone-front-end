'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log('sign up was successful and data is:', data)
  $('#signUp-modal').hide()
  $('#signUp-modal').modal('toggle')
  $('.sign-up-btn').hide()
}

const signUpFailure = (error) => {
  console.error(error)
  $('#sign-up-modal-label').text('Error, please try again.')
}

const signInSuccess = (response) => {
  store.user = response.user
  console.log('sign in was successful and response is:', response)
  $('#sign-in-modal-label').text('Sign In')
  $('#signIn-modal').modal('hide')
  $('.sign-in-prompt').text(' ')
  $('.hide-on-start').show()
  $('.sign-up-btn').hide()
  $('.sign-in-btn').hide()
  $('#card-input-fields').show()
  $('.view-cards-button').show()
  $('.new-card-button').show()

  $('#chng-pw-modal').show()
  $('#sign-out-modal').show()
  $('#sign-up-modal').hide()
  $('#sign-in-modal').hide()
  $('#view-card-btn').show()
  $('#add-card-btn').show()
  $('#blurb').show()
  $('#welcome').hide()

  // $('#signUp-modal').hide()
  // $('#signUp-modal').modal('toggle')
}

const signInFailure = (data) => {
  console.log('error signing out and data is:', data)
  $('#sign-in-modal-label').text('Email/Password failure, please try again')
}

const changePasswordSuccess = (data) => {
  console.log('password changed succesfully and data is:', data)
  $('#changePassword-modal').hide()
  $('#changePassword-modal').modal('toggle')
  $('.pw-message').text('Password change successful!').delay(5000).fadeOut()
}

const changePasswordFailure = (error) => {
  console.log('error changing password and error is:', error)
  $('#changePasswordLabel').text('Error changing password, please try again')
}

const signOutSuccess = (data) => {
  console.log('sign out successful and data:', data)
  store.user = null
  $('#signOut-modal').modal('hide')
  $('.hide-on-start').hide()
  $('.sign-up-btn').show()
  $('.sign-in-btn').show()
  $('#content').empty()
  $('#sign-up-modal').show()
  $('#sign-in-modal').show()
  $('#chng-pw-modal').hide()
  $('#sign-out-modal').hide()
  $('#view-card-btn').hide()
  $('#add-card-btn').hide()
  $('#blurb').hide()
  $('#welcome').show()
  $('.message').hide()
}

const signOutFailure = (error) => {
  console.log('error signing out and error is:', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
