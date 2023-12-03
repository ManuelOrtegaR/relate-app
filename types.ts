import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AuthRequestPromptOptions } from "expo-auth-session"

export type RootStackParamList = {
  "Welcome": undefined,
  "Sign In": undefined,
  "Sign Up": undefined,
  "Home": undefined,
  "Rooms": undefined,
  "Profile": undefined,
  "On Boarding": undefined,
  "Nickname": undefined,
  "Avatar": characterInfo,
  "Lists": undefined,
  "Chat": undefined
}

export type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'Sign In'>
export type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'Sign Up'>
export type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>
export type OnBoardingScreenProps = NativeStackScreenProps<RootStackParamList, 'On Boarding'>
export type NicknameScreenProps = NativeStackScreenProps<RootStackParamList, 'Nickname'>
export type AvatarScreenProps = NativeStackScreenProps<RootStackParamList, 'Avatar'>
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type ProfileScreenProps = BottomTabScreenProps<RootStackParamList, 'Profile'>
export type RoomsScreenProps = BottomTabScreenProps<RootStackParamList, 'Rooms'>
export type ListsScreenProps = BottomTabScreenProps<RootStackParamList, 'Lists'>
export type ChatScreenProps = BottomTabScreenProps<RootStackParamList, 'Chat'>

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

export type characterInfo = {
  name: string,
  description: string,
  nationality: string,
  gender: string,
  age: string,
  language: string,
}
