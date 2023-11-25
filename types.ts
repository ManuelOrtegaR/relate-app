import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamList = {
  "Welcome": undefined,
  "Sign In": undefined,
  "Sign Up": undefined,
  "Home": undefined
  "Rooms": undefined
  "Profile": undefined
}

export type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'Sign Up'>
export type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'Sign In'>
export type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>
export type ProfileScreenProps = BottomTabScreenProps<RootStackParamList, 'Profile'>

export type UserLogged = {
  picture: string,
  birthdate: string,
  emailVerify: boolean,
  suscription: boolean,
  coins: number,
  gems: number,
  notifications: boolean,
  status: string
}

export type UserState = UserLogged | null

export type UserAction = {
  type: string,
  payload: UserLogged
}

export type SignUpBody = {
  nickname: string,
  email: string,
  birthdate: string,
  firebaseUid: string
}
