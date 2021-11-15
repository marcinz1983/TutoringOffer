import {initializeApp} from "firebase/app";
import auth, {getAuth} from "firebase/auth"


export abstract class FirebaseService {

  private static auth: auth.Auth;

  public static initializeApp(): void {
    const firebaseConfig = {
      apiKey: "AIzaSyDvTswj6f5m4POLiO5jTz5U29p2zYobFiM",
      authDomain: "init-dev-5185e.firebaseapp.com",
      databaseURL: "https://init-dev-5185e-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "init-dev-5185e",
      storageBucket: "init-dev-5185e.appspot.com",
      messagingSenderId: "989485275371",
      appId: "1:989485275371:web:f2e2d9b6a9eda232a446ae",
      measurementId: "G-CRL6Z7J7MP"
    };
    initializeApp(firebaseConfig);
    this.auth = getAuth();

  }

  public static getAuth(): auth.Auth {
    return this.auth;
  }
}

// TODO: need to investigate whether below config can be use or not
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };