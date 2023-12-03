import { create } from 'zustand'
import { UserLogged, characterInfo } from '../types';
import { setSession } from '../api/session';

interface UserState {
  data: Login,
  onLogin: (value: Login) => void,
  onLogout: () => void,
  checkingCredentials: () => void
}

type Login = {
  user?: UserLogged,
  character?: characterInfo,
  meta?: Meta,
}

type Meta = {
  token?: string,
  logged: 'authenticated' | 'no-authenticated' | 'checking'
}

const initialState: Login = {
  user: undefined,
  character: undefined,
  meta: {
    logged: 'no-authenticated'
  }
}

export const useUserStore = create<UserState>((set) => ({
  data: initialState,
  onLogin: async (payload: Login) => {
    await setSession(payload.meta?.token)
    set(state => ({ ...state, data: payload }))
  },
  onLogout: () => set(state => ({ ...state, data: initialState })),
  checkingCredentials: () => set(state => ({ ...state, data: { meta: { logged: 'checking' } } }))
}))

