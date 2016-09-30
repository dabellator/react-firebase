import { Auth } from '../Services/Firebase';

export function createUser (firstName, lastName, email, password) {
  console.log('submit:', email, password);
  // TODO: need to figure out how to handle additional user info
  // upon account creation: firstName, lastName, etc
  Auth.createUser(email, password)
}

export function loginUser (email, password) {
  Auth.loginUser(email, password)
}

export function checkUser () {
  return dispatch => {
    Auth.checkUser( user => {
      dispatch({ type: 'LOGGED_IN', user })
    }, () => {
      dispatch({ type: 'NOT_LOGGED_IN'})
    })
  }
}

export function logoutUser () {
  Auth.logoutUser()
}
