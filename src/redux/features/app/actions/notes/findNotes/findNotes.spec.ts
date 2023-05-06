import { type Note } from '@/common/types/notes.type'
import {
  initialAppState,
  appSlice,
  type AppState
} from '@/redux/features/app/store/app.slice'
import { findNotes } from '@/redux/features/app/actions/notes/findNotes/findNotes'

describe('When findNotes is called', () => {
  let initialState: AppState = initialAppState
  const noteReducer = appSlice.reducer

  beforeEach(() => {
    initialState = initialAppState
  })

  it('and is successful', () => {
    const expected = [{} as Note, {} as Note] as Note[]

    const { notes } = noteReducer(
      initialState,
      findNotes.fulfilled(
        { count: expected.length, notes: expected },
        '',
        initialState.filters
      )
    )

    expect(notes.length).toEqual(expected.length)
  })

  it('if there are not notes', () => {
    const expected = [] as Note[]

    const { notes } = noteReducer(
      initialState,
      findNotes.fulfilled(
        { count: expected.length, notes: expected },
        '',
        initialState.filters
      )
    )

    expect(notes.length).toEqual(expected.length)
  })

  it('and is pending', () => {
    const { isLoading } = noteReducer(initialState, findNotes.pending)

    expect(isLoading).toBeTruthy()
  })

  it('and is rejected', () => {
    const { isLoading } = noteReducer(initialState, findNotes.rejected)

    expect(isLoading).toBeFalsy()
  })
})
