import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

firebase.initializeApp({
  apiKey: 'AIzaSyAmL00p-QDHWqQ1R5WHeAiIvQcPW7TFLUI',
  authDomain: 'mylawyer-55408.firebaseapp.com',
  databaseURL:
    'https://mylawyer-55408-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'mylawyer-55408',
  storageBucket: 'mylawyer-55408.appspot.com',
  messagingSenderId: '651834962651',
  appId: '1:651834962651:web:12815f7b813ac69f1592fe',
  measurementId: 'G-B7Z0CWZY2D',
});

const Fire = firebase;

export default Fire;
