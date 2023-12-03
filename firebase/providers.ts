import { GoogleAuthProvider, signIn } from 'firebase/auth';
import { FirebaseAuth } from './firebase-config.ts';

const googleProvider = new GoogleAuthProvider();


/* 
picture: string,
  birthdate: string,
  emailVerify: boolean,
  suscription: boolean,
  coins: number,
  gems: number,
  notifications: boolean,
  status: string
*/

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    console.log(result.user)
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      ok: false,
      errorCode,
      errorMessage,
    };
  }
};
