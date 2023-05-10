import { type ActionReducerMapBuilder } from '@reduxjs/toolkit'
import {
  initialAppState,
  type AppState
} from '@/redux/features/app/store/app.slice'
import { usdToArs } from '@/redux/features/app/actions/usdConverter/usdToArs/usdToArs'

export function usdConverterExtraReducers(
  builder: ActionReducerMapBuilder<AppState>
): void {
  builder.addCase(usdToArs.pending, (state) => {
    state.isLoading = true
  })
  builder.addCase(usdToArs.fulfilled, (state, { payload }) => {
    state.isLoading = false
    // state.paymentInArs = payload
  })
  builder.addCase(usdToArs.rejected, (state) => {
    state.isLoading = false
  })
}
