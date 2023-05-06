import { type User } from '@/common/types/user.type'
import { userService } from '@/redux/features/auth/services/user.service'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const signUp = createAsyncThunk<User, string>(
  'app/signUp',
  async (accessToken: string) => {
    try {
      return await userService.signUp(accessToken)
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }
      return {} as User
    }
  }
)
