import { signUp } from '@/redux/features/auth/actions/signUp/signUp'
import { type ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { findUserById } from '@/redux/features/auth/actions/findUserById/findUserById'
import { findUsers } from '@/redux/features/auth/actions/findUsers/findUsers'
import { logIn } from '@/redux/features/auth/actions/logIn/logIn'
import { type AuthState } from '@/redux/features/auth/store/auth.slice'

export function usersExtraReducers(
  builder: ActionReducerMapBuilder<AuthState>
): void {
  // Sign Up
  builder.addCase(signUp.pending, (state) => {
    state.isLoading = true
  })
  builder.addCase(signUp.fulfilled, (state, { payload }) => {
    state.account = payload
    state.isAuthenticated = true
    state.isLoading = false
  })
  builder.addCase(signUp.rejected, (state) => {
    state.isLoading = false
  })
  // Log In
  builder.addCase(logIn.pending, (state) => {
    state.isLoading = true
  })
  builder.addCase(logIn.fulfilled, (state, { payload }) => {
    state.account = payload
    state.isAuthenticated = true
    state.isLoading = false
  })
  builder.addCase(logIn.rejected, (state) => {
    state.isLoading = false
  })
  // Find Users
  builder.addCase(findUsers.pending, (state) => {
    state.isLoading = true
  })
  builder.addCase(findUsers.fulfilled, (state, { payload }) => {
    state.isLoading = false
    state.users = payload.users
    state.usersCount = payload.count
  })
  builder.addCase(findUsers.rejected, (state) => {
    state.isLoading = false
  })
  // FindUserById
  builder.addCase(findUserById.pending, (state) => {
    state.isLoading = true
  })
  builder.addCase(findUserById.fulfilled, (state, { payload }) => {
    state.account = payload
    state.isLoading = false
  })
  builder.addCase(findUserById.rejected, (state) => {
    state.isLoading = false
  })
}
