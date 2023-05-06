import { type FilterBase } from '@/common/types/filterBase.types'
import { type User } from '@/common/types/user.type'
import { createSlice } from '@reduxjs/toolkit'
import { usersExtraReducers } from './users.extraReducers'

export interface AuthState {
  account: User
  users: User[]
  usersCount: number
  isAuthenticated: boolean
  isLoading: boolean
  filters: FilterBase
}

export const initialAuthState: AuthState = {
  account: {} as User,
  users: [],
  usersCount: 0,
  isAuthenticated: false,
  isLoading: false,
  filters: { limit: 100, page: 1, search: '' }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    setAccount: (state, { payload }) => {
      state.account = payload
    }
  },
  extraReducers: (builder) => {
    usersExtraReducers(builder)
  }
})

export const { setAccount } = authSlice.actions
