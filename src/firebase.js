import firebase from 'firebase/compat/app'
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyDo6Rrrp4hZi4FWrQVSDCd7R4numArq31k",
    authDomain: "contact-management-syste-af93e.firebaseapp.com",
    databaseURL: "https://contact-management-syste-af93e-default-rtdb.firebaseio.com",
    projectId: "contact-management-syste-af93e",
    storageBucket: "contact-management-syste-af93e.appspot.com",
    messagingSenderId: "392495509455",
    appId: "1:392495509455:web:3111703f3dd52ce5b66cba"
  };

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();