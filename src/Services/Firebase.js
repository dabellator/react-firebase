// stub, add handle error library
const handleErr = function (err) {
  console.log('Something has gone terribly wrong: ', err);
}

/*
* Firebase Authentication Routes
*/

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

export function checkUser (userCb, noUserCb) {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log('LOGGED IN: ', user);
      userCb(user);
    } else {
      console.log('No one here');
      noUserCb();
    }
  })
}

export function logOut () {
  firebase.auth().signOut().then(() => {
    console.log('SIGNED OUT');
  })
}

/*
* Firebase Database Routes
*/

export function read (path, cb) {
  firebase.database().ref(path).once('value').then(cb).catch(handleErr);
};

export function listen (path, cb, e) {
  e = e || 'value';
  firebase.database().ref(path).on(e, cb);
};

export function create (path, dataObj, cb) {
  firebase.database().ref(path).set(dataObj).then(cb).catch(handleErr);
};

export function update (path, dataObj, cb) {
  firebase.database().ref(path).update(dataObj).then(cb).catch(handleErr);
};

export function remove (path, cb) {
  firebase.database().ref(path).remove().then(cb).catch(handleErr);
};

export const database = {
  read,
  listen,
  create,
  update,
  remove
};