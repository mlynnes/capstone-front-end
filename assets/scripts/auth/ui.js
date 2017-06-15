'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log('sign up was successful and data is:', data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (response) => {
  store.user = response.user
  console.log('sign in was successful and response is:', response)
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#create-card').show()
  $('#get-cards').show()
  $('#delete-card').show()
  $('#update-card').show()
}

const signInFailure = (data) => {
  console.log('error signing out and data is:', data)
}

const changePasswordSuccess = (data) => {
  console.log('password changed succesfully and data is:', data)
}

const changePasswordFailure = (error) => {
  console.log('error changing password and error is:', error)
}

const signOutSuccess = (data) => {
  console.log('sign out successful and data:', data)
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#create-card').hide()
  $('#get-cards').hide()
  $('#delete-card').hide()
  $('#update-card').hide()
  $('.app').hide()
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
