import { type FilterBase } from '@/common/types/filterBase.types'
import { type User } from '@/common/types/user.type'
import { userService } from '@/redux/features/auth/services/user.service'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const findUsers = createAsyncThunk<
  { count: number; users: User[] },
  FilterBase
>('app/findUsers', (filters) => userService.find(filters))
