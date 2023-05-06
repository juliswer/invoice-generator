import { type User } from '@/common/types/user.type'
import {
  authSlice,
  initialAuthState,
  type AuthState
} from '@/redux/features/auth/store/auth.slice'
import { signUp } from '@/redux/features/auth/actions/signUp/signUp'

describe('When signUpAction is called', () => {
  let initialState: AuthState = initialAuthState
  const { reducer } = authSlice
  const id = '123'

  beforeEach(() => {
    initialState = initialAuthState
  })

  it('and is successfully', () => {
    const expected = initialState.account

    const actual = reducer(initialState, signUp.fulfilled(expected, '', id))

    expect(actual.account).toBe(expected)
    expect(actual.isAuthenticated).toBe(true)
  })

  it('and the user is not found', () => {
    const expected = {} as User

    const actual = reducer(initialState, signUp.fulfilled(expected, '', id))

    expect(actual.account).toEqual(expected)
  })

  it('and is pending', () => {
    const expected = true
    const actual = reducer(initialState, signUp.pending)
    expect(actual.isLoading).toEqual(expected)
  })

  it('and is rejected', () => {
    const expected = false
    const actual = reducer(initialState, signUp.rejected)
    expect(actual.isLoading).toEqual(expected)
  })
})
