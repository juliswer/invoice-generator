import { type ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { type AppState } from '@/redux/features/app/store/app.slice'
import { calculatePercentage } from '../actions/getPercentage/calculatePercentage/calculatePercentage'

export function percentageCalculatorExtraReducers(
  builder: ActionReducerMapBuilder<AppState>
): void {
  // get percentage (finalAmount and percentage)
  builder.addCase(calculatePercentage.pending, (state) => {
    state.isLoading = true
  })
  builder.addCase(calculatePercentage.fulfilled, (state, { payload }) => {
    state.isLoading = false
    state.percentageAmount = payload
  })
  builder.addCase(calculatePercentage.rejected, (state) => {
    state.isLoading = false
  })
}
