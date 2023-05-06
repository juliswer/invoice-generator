import { type Note } from '@/common/types/notes.type'
import {
  appSlice,
  initialAppState,
  type AppState
} from '@/redux/features/app/store/app.slice'
import { findNoteById } from '@/redux/features/app/actions/notes/findNoteById/findNoteById'

describe('When findNoteById is called', () => {
  let initialState: AppState = initialAppState
  const noteReducer = appSlice.reducer
  const id = '123'

  beforeEach(() => {
    initialState = initialAppState
  })

  it('and is successful', () => {
    const expected = {
      id: 'aabb1122',
      title: 'note title',
      description: 'note description'
    } as Note

    const { note } = noteReducer(
      initialState,
      findNoteById.fulfilled(expected, '', id)
    )

    expect(note).toBe(expected)
  })

  it('if I do not find any note', () => {
    const expected = {} as Note

    const { note } = noteReducer(
      initialState,
      findNoteById.fulfilled(expected, '', id)
    )

    expect(Object.keys(note).length).toEqual(Object.keys(expected).length)
  })

  it('and is pending', () => {
    const { isLoading } = noteReducer(initialState, findNoteById.pending)

    expect(isLoading).toBeTruthy()
  })

  it('and is rejected', () => {
    const { isLoading } = noteReducer(initialState, findNoteById.rejected)

    expect(isLoading).toBeFalsy()
  })
})
