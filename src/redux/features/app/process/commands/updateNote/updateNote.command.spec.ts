import { NotesServiceMock } from '@/redux//features/app/services/NotesService/notes.service.mock'
import { type Note } from '@/common/types/notes.type'
import { updateNoteCommand } from '@/redux/features/app/process/commands/updateNote/updateNote.command'
import { NoteErrors } from '@/redux/features/app/process/errors/notes.errors.enum'

describe('When updateNote is called', () => {
  it('and is successfully', async () => {
    const noteToUpdate = {
      id: 'abc',
      title: 'title',
      description: 'description',
      author: { id: 'abc' },
      createdAt: new Date(),
      updatedAt: new Date()
    } as Note

    NotesServiceMock.update.mockResolvedValue(noteToUpdate)

    const updatedNote = await updateNoteCommand(noteToUpdate, [
      NotesServiceMock
    ])

    expect(NotesServiceMock.update).toHaveBeenCalled()
    expect(NotesServiceMock.update).toHaveBeenCalledWith(noteToUpdate)
    expect(updatedNote).toBe(noteToUpdate)
  })

  it.each([
    {
      state: {},
      error: NoteErrors.RequiredId
    },
    {
      state: {
        id: 'abc'
      },
      error: NoteErrors.RequiredTitle
    },
    {
      state: {
        id: 'abc',
        title: 'title'
      },
      error: NoteErrors.RequiredDescription
    },
    {
      state: {
        id: 'abc',
        title: 'title',
        description: 'description',
        author: {}
      },
      error: NoteErrors.RequiredAuthorId
    },
    {
      state: {
        id: 'abc',
        title: 'title',
        description: 'description',
        author: { id: 'abc' }
      },
      error: NoteErrors.RequiredCreatedAt
    },
    {
      state: {
        id: 'abc',
        title: 'title',
        description: 'description',
        author: { id: 'abc' },
        createdAt: new Date()
      },
      error: NoteErrors.RequiredUpdatedAt
    }
  ])('and i have properties issues', async ({ state, error }) => {
    try {
      await updateNoteCommand(state as unknown as Note, [NotesServiceMock])
    } catch (e) {
      if (e instanceof Error) {
        expect(e.message).toBe(error)
      }
    }
  })
})
