import { type Note } from '@/common/types/notes.type'
import {
  appSlice,
  type AppState,
  initialAppState
} from '@/redux/features/app/store/app.slice'
import { usdToArs } from '@/redux/features/app/actions/usdConverter/usdToArs/usdToArs'

describe('When usdToArs is called', () => {
  let initialState: AppState = initialAppState
  const usdConverter = appSlice.reducer
  const dollarsAmount = 10
  const dollarValue = 471

  beforeEach(() => {
    initialState = initialAppState
  })

  it('and is successful', () => {
    const finalAmount = dollarValue * dollarsAmount
    // first parameter: the return
    // secondar parameter: empty string
    // third parameter: the params of the action
    const { paymentInArs } = usdConverter(
      initialState,
      usdToArs.fulfilled(finalAmount, '', dollarValue)
    )

    expect(paymentInArs).toBe(finalAmount)
  })

  it('and is pending', () => {
    const { isLoading } = usdConverter(initialState, usdToArs.pending)

    expect(isLoading).toBeTruthy()
  })

  it('and is rejected', () => {
    const { isLoading } = usdConverter(initialState, usdToArs.rejected)

    expect(isLoading).toBeFalsy()
  })
})
