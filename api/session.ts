import AsyncStorage from "@react-native-async-storage/async-storage";
const TOKEN_KEY = '@token';
const USER_KEY = '@user'
const GOOGLE_USER_KEY = '@googleUser'

export async function setSession(payload: unknown): Promise<void> {
  let data = payload;
  if (typeof payload === 'object') {
    data = JSON.stringify(payload);
  }
  await AsyncStorage.setItem(TOKEN_KEY, String(data))
}

export async function getSession(): Promise<string | null> {
  let data = await AsyncStorage.getItem(TOKEN_KEY);
  if (data && typeof data === 'object') {
    data = JSON.parse(data);
  }
  return data;
}

export async function clearSession(): Promise<void> {
  await AsyncStorage.removeItem(TOKEN_KEY);
  await AsyncStorage.setItem(USER_KEY, String(null));
  await AsyncStorage.setItem(GOOGLE_USER_KEY, String(null));
}

export async function setUser(payload: unknown): Promise<void> {
  await AsyncStorage.setItem(USER_KEY, JSON.stringify(payload));
}
export async function setGoogleUser(payload: unknown): Promise<void> {
  await AsyncStorage.setItem(GOOGLE_USER_KEY, JSON.stringify(payload));
}

export async function getUser(): Promise<string | null> {
  let data = await AsyncStorage.getItem(USER_KEY);
  if (data && typeof data === 'object') {
    data = JSON.parse(data);
  }
  return data;
}
