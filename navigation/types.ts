import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RoomInfo, characterInfo } from "../types"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"

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
  "Chat": undefined,
  "Room": RoomInfo,
  "Username": undefined,
  "ProfilePhoto": undefined,
  "Characters": undefined,
  "Character": undefined,
  "CreateCharacter": undefined,
  "Account": undefined
}

export type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'Sign In'>
export type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'Sign Up'>
export type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>
export type OnBoardingScreenProps = NativeStackScreenProps<RootStackParamList, 'On Boarding'>
export type NicknameScreenProps = NativeStackScreenProps<RootStackParamList, 'Nickname'>
export type AvatarScreenProps = NativeStackScreenProps<RootStackParamList, 'Avatar'>
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type RoomScreenProps = NativeStackScreenProps<RootStackParamList, 'Room'>
export type AccountScreenProps = NativeStackScreenProps<RootStackParamList, 'Account'>
export type CreateCharacterScreenProps = NativeStackScreenProps<RootStackParamList, 'CreateCharacter'>
export type CharacterScreenProps = NativeStackScreenProps<RootStackParamList, 'Character'>
export type CharactersScreenProps = NativeStackScreenProps<RootStackParamList, 'Characters'>
export type ProfilePhotoScreenProps = NativeStackScreenProps<RootStackParamList, 'ProfilePhoto'>
export type UsernameScreenProps = NativeStackScreenProps<RootStackParamList, 'Username'>
export type ProfileScreenProps = BottomTabScreenProps<RootStackParamList, 'Profile'>
export type RoomsScreenProps = BottomTabScreenProps<RootStackParamList, 'Rooms'>
export type ListsScreenProps = BottomTabScreenProps<RootStackParamList, 'Lists'>
export type ChatScreenProps = BottomTabScreenProps<RootStackParamList, 'Chat'>
