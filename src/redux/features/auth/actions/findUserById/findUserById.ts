import { type User } from '@/common/types/user.type'
import { userService } from '@/redux/features/auth/services/user.service'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const findUserById = createAsyncThunk<User, string>(
  'app/findUserById',
  (id) => userService.findById(id)
)
