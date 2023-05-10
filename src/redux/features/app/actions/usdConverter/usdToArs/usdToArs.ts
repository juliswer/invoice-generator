import { createAsyncThunk } from '@reduxjs/toolkit'
import { usdConverterService } from '../../../services/usdConverterService/usdConverter.service'

export const usdToArs = createAsyncThunk<number, number>(
  'app/getArsFromUsd',
  (number) => usdConverterService.getArsFromUsd(number)
)
