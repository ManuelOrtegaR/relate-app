import { UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "firebase/auth";
import { FirebaseAuth } from "./firebase-config";
import { SignUpWithCredentialsError } from "../errors";
import { SignUpBody } from "../types";
import { signUp } from "../api/auth";

interface Props {
  email: string,
  password: string
  nickname: string
}

export const useCredentials = () => {

  const createUserWithCredentials = async ({ email, password, nickname }: Props): Promise<UserCredential> => {

    const response = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const body: SignUpBody = {
      nickname,
      email,
      birthdate: '28/06/1992',
      firebaseUid: response.user.uid,
    };

    await signUp(body);
    return response
  }

  const signInWithCredentials = async ({ email, password }: Props): Promise<UserCredential> => {
    const response = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password,
    );

    return response
  }

  return {
    createUserWithCredentials,
    signInWithCredentials
  }
}
