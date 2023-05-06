import { type Note } from '@/common/types/notes.type'
import {
  appSlice,
  initialAppState,
  type AppState
} from '@/redux/features/app/store/app.slice'
import { updateNote } from '@/redux/features/app/actions/notes/updateNote/updateNote'

describe('When updateNote is called', () => {
  let initialState: AppState = initialAppState
  const notesReducer = appSlice.reducer
  const noteToUpdate = {
    id: '123',
    title: 'note title',
    description: 'note description'
  } as Note

  beforeEach(() => {
    initialState = initialAppState
  })

  it('and is successfully', () => {
    const expected = initialState.note

    const { note } = notesReducer(
      initialState,
      updateNote.fulfilled(noteToUpdate, '', noteToUpdate)
    )

    expect(Object.keys(note).length).toBeGreaterThan(
      Object.keys(expected).length
    )
  })

  it('and is pending', () => {
    const expected = true
    const { isLoading } = notesReducer(initialState, updateNote.pending)

    expect(isLoading).toBe(expected)
  })

  it('and is rejected', () => {
    const expected = false
    const { isLoading } = notesReducer(initialState, updateNote.rejected)

    expect(isLoading).toBe(expected)
  })
})
