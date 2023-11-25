import { SignUpBody } from '../../types';
import http from '../http';
//import { setSession } from '../session';
import { decodeUserOutput } from './decoders';

export const signIn = async ({ firebaseUid }: { firebaseUid: string }) => {
  try {
    const { data: response } = await http.post('/auth/signin', { firebaseUid });

    const data = await decodeUserOutput(response);
    const { token = '' } = data.meta;
    // setSession(token);

    return { data };
  } catch (error) {
    console.log(error)
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
