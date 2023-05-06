import { type User } from '@/common/types/user.type'
import { userService } from '@/redux/features/auth/services/user.service'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const logIn = createAsyncThunk<User, string>(
  'app/logIn',
  async (accessToken: string) => {
    try {
      return await userService.logIn(accessToken)
    } catch (error) {
      localStorage.removeItem('userAccessToken')
      window.location.replace('/login')
      if (error instanceof Error) {
        throw new Error(error.message)
      }
      return {} as User
    }
  }
)
