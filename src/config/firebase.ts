import firebase from 'firebase/compat/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDHE9fVBUM_mto-p_SkWnyKtOiRu8M5F98',
  authDomain: 'react-firebase-farazamiruddin.firebaseapp.com',
  databaseURL: 'https://react-firebase-farazamiruddin.firebaseio.com',
  projectId: 'react-firebase-farazamiruddin',
  storageBucket: 'react-firebase-farazamiruddin.appspot.com',
  messagingSenderId: '338564911587',
  appId: '1:338564911587:web:c34e6fee0ff41bbe7fd0d6'
};

const app = firebase.apps.length > 0 ? firebase.app() : firebase.initializeApp(firebaseConfig);

const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {
  // Check for user status
  console.log(user, 'user');
});

const db = getFirestore(app);
const storage = app.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

const EmailProvider = new firebase.auth.EmailAuthProvider();

export { auth, db, storage, timestamp, EmailProvider };
