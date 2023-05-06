import { type Note } from '@/common/types/notes.type'
import {
  appSlice,
  type AppState,
  initialAppState
} from '@/redux/features/app/store/app.slice'
import { deleteNote } from '@/redux/features/app/actions/notes/deleteNote/deleteNote'

describe('When delete note is called', () => {
  let initialState: AppState = initialAppState
  const noteReducer = appSlice.reducer
  const id = '123'

  beforeEach(() => {
    initialState = initialAppState
  })

  it('and is successful', () => {
    const { note } = noteReducer(
      initialState,
      deleteNote.fulfilled({ id } as Note, '', id)
    )

    expect(Object.keys(note).length).toBeGreaterThan(0)
  })

  it('if i do not find a note with that id', () => {
    const { note } = noteReducer(
      initialState,
      deleteNote.fulfilled({} as Note, '', id)
    )

    expect(Object.keys(note).length).toEqual(0)
  })

  it('and is pending', () => {
    const { isLoading } = noteReducer(initialState, deleteNote.pending)

    expect(isLoading).toBeTruthy()
  })

  it('and is rejected', () => {
    const { isLoading } = noteReducer(initialState, deleteNote.rejected)

    expect(isLoading).toBeFalsy()
  })
})
