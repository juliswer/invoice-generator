import { createSlice } from '@reduxjs/toolkit'
import { notesExtraReducers } from '@/redux/features/app/store/notes.extraReducers'
import { usdConverterExtraReducers } from '@/redux/features/app/store/usdConverter.extraReducers'
import { type FilterBase } from '@/common/types/filterBase.types'
import { Note } from '@/common/types/notes.type'
import { percentageCalculatorExtraReducers } from '@/redux/features/app/store/percentageCalculator.extraReducers'

export interface AppState {
  note: Note
  notes: Note[]
  notesCount: number
  filters: FilterBase
  isLoading: boolean
  isOpenDrawer: boolean
  paymentAmount: {
    usd: number
    ars: number
  }
  dollarToArsValue: null | number
  percentageAmount: {
    percentage: number
    finalAmount: number
  }
}

export const initialAppState: AppState = {
  note: {} as Note,
  notes: [],
  notesCount: 0,
  filters: { limit: 100, page: 1, search: '' },
  isLoading: false,
  isOpenDrawer: false,
  paymentAmount: {
    usd: 0,
    ars: 0
  },
  dollarToArsValue: null,
  percentageAmount: {
    percentage: 0,
    finalAmount: 0
  }
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
      state.paymentAmount.usd = payload
    }
  },
  extraReducers: (builder) => {
    notesExtraReducers(builder)
    usdConverterExtraReducers(builder)
    percentageCalculatorExtraReducers(builder)
  }
})

export const { setIsOpenDrawer, setNote, setPaymentAmount } = appSlice.actions
