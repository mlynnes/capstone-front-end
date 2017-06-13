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
