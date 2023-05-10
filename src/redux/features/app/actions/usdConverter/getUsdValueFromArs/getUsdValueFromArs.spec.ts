import { type Note } from '@/common/types/notes.type'
import {
  appSlice,
  type AppState,
  initialAppState
} from '@/redux/features/app/store/app.slice'
import { getUsdValueFromArs } from '@/redux/features/app/actions/usdConverter/getUsdValueFromArs/getUsdValueFromArs'

describe('When getUsdValueFromArs is called', () => {
  let initialState: AppState = initialAppState
  const usdConverter = appSlice.reducer
  const dollarValue = 471

  beforeEach(() => {
    initialState = initialAppState
  })

  it('and is successful', () => {
    // first parameter: the return
    // secondar parameter: empty string
    // third parameter: the params of the action
    const { dollarToArsValue } = usdConverter(
      initialState,
      getUsdValueFromArs.fulfilled(dollarValue, '')
    )

    expect(dollarToArsValue).toBe(dollarValue)
  })

  it('and is pending', () => {
    const { isLoading } = usdConverter(initialState, getUsdValueFromArs.pending)

    expect(isLoading).toBeTruthy()
  })

  it('and is rejected', () => {
    const { isLoading } = usdConverter(
      initialState,
      getUsdValueFromArs.rejected
    )

    expect(isLoading).toBeFalsy()
  })
})
