import { createAsyncThunk } from '@reduxjs/toolkit'
import { usdConverterService } from '../../../services/usdConverterService/usdConverter.service'

export const getUsdValueFromArs = createAsyncThunk<number>(
  'app/getUsdValueFromArs',
  () => usdConverterService.getUsdValueFromArs()
)
