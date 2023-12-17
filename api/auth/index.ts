import { SignUpBody } from '../../types';
import http from '../http';
import { setSession, setUser } from '../session';
import { decodeUserOutput } from './decoders';

export const signIn = async ({ firebaseUid }: { firebaseUid: string }) => {
  try {
    const { data: response } = await http.post('/auth/signin', { firebaseUid });
    const data = await decodeUserOutput(response);
    const { token = '' } = data.meta;
    console.log('JWT', token)
    setSession(token);
    setUser(data.data)
    return { data };
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function signUp(payload: SignUpBody) {
  try {
    const { data: response } = await http.post('/auth/signup', payload);

    return {
      response,
    };
  } catch (error) {
    return Promise.reject(error);
  }
}

// export async function activateUser(token: string) {
//   try {
//     const { data: response } = await http.get(`/users/activate/${token}`);

//     const data = await decodeUserOutput(response.data);

//     return {
//       data,
//     };
//   } catch (error) {
//     return Promise.reject(error);
//   }
// }

// export async function confirmUser(email: string) {
//   try {
//     const { data: response } = await http.post(`/users/confirmation`, {
//       email,
//     });

//     const data = await decodeUserOutput(response.data);

//     return {
//       data,
//     };
//   } catch (error) {
//     return Promise.reject(error);
//   }
// }


// export const checkingAuthentication = () => {
//   return checkingCredentials()
// };

// export const startGoogleSignIn = async () => {

//   checkingCredentials()
//   const result = await signInWithGoogle();

//   if (!result.ok) return onLogout();
//   //onLogin(result);
// };
