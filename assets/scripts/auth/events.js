'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require(`../../../lib/get-form-fields`)

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
  .then(ui.signUpSuccess)
  .then(() => {
    api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  })
  .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
  .then(ui.signOutSuccess)
  .catch(ui.signOutFailure)
}

const showSignUpModal = function (event) {
  $('#signUp-modal').modal('toggle')
}

const showSignInModal = function (event) {
  $('#signIn-modal').modal('toggle')
}

const showChangePasswordModal = function (event) {
  $('#changePassword-modal').modal('toggle')
}

const addHandlers = () => {
  $('#sign-up-modal').on('click', showSignUpModal)
  $('#sign-in-modal').on('click', showSignInModal)
  $('#chng-pw-modal').on('click', showChangePasswordModal)
  $('#sign-out-modal').on('click', onSignOut)
  // $('#sign-up').on('submit', onSignUp)
  // $('#sign-in').on('submit', onSignIn)
  // $('#change-password').on('submit', onChangePassword)
  // $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers,
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
