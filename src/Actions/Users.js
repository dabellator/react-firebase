export function createUser (email, password) {
  console.log('submit:', email, password);
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(err => {
    console.log('troubles: ', err);
  })
}

export function loginUser (email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
    console.log('troubles: ', err);
  })
}

export function checkUser () {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log('LOGGED IN: ', user);
      firebase.database().ref('log/' + user.uid).set({
        lastLogin: Date.now()
      })
    } else {
      console.log('No one here');
      firebase.database().ref('create/jb').set({
        username: 'jb'
      });
    }
  })
}

export function logOut () {
  firebase.auth().signOut().then(() => {
    console.log('SIGNED OUT');
  })
}
