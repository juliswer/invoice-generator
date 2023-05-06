import { authSlice } from '@/redux/features/auth/store/auth.slice'
import { configureStore } from '@reduxjs/toolkit'
import { uiSlice } from '@/redux/store/ui/ui.slice'
import { appSlice } from '@/redux/features/app/store/app.slice'

export const rootStore = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    app: appSlice.reducer
  }
})

export type RootState = ReturnType<typeof rootStore.getState>
export type AppDispatch = typeof rootStore.dispatch
//actions process services store
