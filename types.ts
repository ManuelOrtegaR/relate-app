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
