import { type User } from '@/common/types/user.type'
import { findUsers } from '@/redux/features/auth/actions/findUsers/findUsers'
import {
  authSlice,
  type AuthState,
  initialAuthState
} from '@/redux/features/auth/store/auth.slice'

describe('When findUsers is called', () => {
  let initialState: AuthState = initialAuthState
  const userReducer = authSlice.reducer

  beforeEach(() => {
    initialState = initialAuthState
  })

  it('and is successful', () => {
    const expected = [{} as User, {} as User] as User[]

    const { users } = userReducer(
      initialState,
      findUsers.fulfilled(
        { count: expected.length, users: expected },
        '',
        initialState.filters
      )
    )

    expect(users.length).toEqual(expected.length)
  })

  it('if there are not notes', () => {
    const expected = [] as User[]

    const { users } = userReducer(
      initialState,
      findUsers.fulfilled(
        { count: expected.length, users: expected },
        '',
        initialState.filters
      )
    )

    expect(users.length).toEqual(expected.length)
  })

  it('and is pending', () => {
    const { isLoading } = userReducer(initialState, findUsers.pending)

    expect(isLoading).toBeTruthy()
  })

  it('and is rejected', () => {
    const { isLoading } = userReducer(initialState, findUsers.rejected)

    expect(isLoading).toBeFalsy()
  })
})
