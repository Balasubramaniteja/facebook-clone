import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyC8FNRCN2rAE6y8r2TUAZ4MY9SbyT0go6s",
    authDomain: "facebook-clone-dcd7a.firebaseapp.com",
    databaseURL: "https://facebook-clone-dcd7a.firebaseio.com",
    projectId: "facebook-clone-dcd7a",
    storageBucket: "facebook-clone-dcd7a.appspot.com",
    messagingSenderId: "340358385555",
    appId: "1:340358385555:web:05678fdb1c1d5701c62266",
    measurementId: "G-VY7Q8QC72N"
  };

  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider };
  export default db;

 