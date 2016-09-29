import { database } from '../Services/Firebase';

export function createUser (firstName, lastName, email, password) {
  console.log('submit:', email, password);
  // TODO: need to figure out how to handle additional user info
  // upon account creation: firstName, lastName, etc
  database.createUser(email, password)
}

export function loginUser (email, password) {
  database.loginUser(email, password)
}

export function checkUser () {
  return dispatch => {
    database.checkUser( user => {
      dispatch({ type: 'LOGGED_IN', user })
    }, () => {
      dispatch({ type: 'NOT_LOGGED_IN'})
    })
  }
}

export function logOut () {
  database.logOut()
}
