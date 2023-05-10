import { type ActionReducerMapBuilder } from '@reduxjs/toolkit'
import {
  initialAppState,
  type AppState
} from '@/redux/features/app/store/app.slice'
import { usdToArs } from '@/redux/features/app/actions/usdConverter/usdToArs/usdToArs'
import { getUsdValueFromArs } from '../actions/usdConverter/getUsdValueFromArs/getUsdValueFromArs'

export function usdConverterExtraReducers(
  builder: ActionReducerMapBuilder<AppState>
): void {
  // get ARS from USD
  builder.addCase(usdToArs.pending, (state) => {
    state.isLoading = true
  })
  builder.addCase(usdToArs.fulfilled, (state, { payload }) => {
    state.isLoading = false
    state.paymentInArs = payload
  })
  builder.addCase(usdToArs.rejected, (state) => {
    state.isLoading = false
  })
  // get ARS value from USD
  builder.addCase(getUsdValueFromArs.pending, (state) => {
    state.isLoading = true
  })
  builder.addCase(getUsdValueFromArs.fulfilled, (state, { payload }) => {
    state.isLoading = false
    state.dollarToArsValue = payload
  })
  builder.addCase(getUsdValueFromArs.rejected, (state) => {
    state.isLoading = false
  })
}
