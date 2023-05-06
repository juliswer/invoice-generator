import { createSlice } from '@reduxjs/toolkit'
import { notesExtraReducers } from '@/redux/features/app/store/notes.extraReducers'
import { type FilterBase } from '@/common/types/filterBase.types'
import { Note } from '@/common/types/notes.type'

export interface AppState {
  note: Note
  notes: Note[]
  notesCount: number
  filters: FilterBase
  isLoading: boolean
  isOpenDrawer: boolean
  paymentAmount: number
}

export const initialAppState: AppState = {
  note: {} as Note,
  notes: [],
  notesCount: 0,
  filters: { limit: 100, page: 1, search: '' },
  isLoading: false,
  isOpenDrawer: false,
  paymentAmount: 0
}

export const appSlice = createSlice({
  name: 'app',
  initialState: initialAppState,
  reducers: {
    setIsOpenDrawer: (state, { payload }: { payload: boolean }) => {
      state.isOpenDrawer = payload
    },
    setNote: (state, { payload }: { payload: Note }) => {
      state.note = payload
    },
    setPaymentAmount: (state, { payload }: { payload: number }) => {
      state.paymentAmount = payload
    }
  },
  extraReducers: (builder) => {
    notesExtraReducers(builder)
  }
})

export const { setIsOpenDrawer, setNote, setPaymentAmount } = appSlice.actions
