import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: 'AIzaSyCWFliVbq7k81Eydbzhb6V2QBrPknyYYPE',
  authDomain: 'relatanosapp.firebaseapp.com',
  projectId: 'relatanosapp',
  storageBucket: 'relatanosapp.appspot.com',
  messagingSenderId: '818104002738',
  appId: '1:818104002738:web:e9b9d6794e2b8518f681ab',
};

// android clientid: 503380554468-m5051l8ka5gt6qdq1taml9c95kh9nsdi.apps.googleusercontent.com

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
