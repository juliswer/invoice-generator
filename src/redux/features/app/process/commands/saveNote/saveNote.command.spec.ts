import { type Note } from '@/common/types/notes.type'
import { saveNoteCommand } from '@/redux/features/app/process/commands/saveNote/saveNote.command'
import { NotesServiceMock } from '@/redux/features/app/services/NotesService/notes.service.mock'
import { NoteErrors } from '@/redux/features/app/process/errors/notes.errors.enum'

describe('When saveNoteCommand is called', () => {
  it('and is successful', async () => {
    const noteToSend = {
      title: 'title',
      description: 'description',
      author: {
        id: 'abc123'
      }
    } as Note

    NotesServiceMock.save.mockResolvedValue({ id: 'abc' })
    const createdNote = await saveNoteCommand(noteToSend, [NotesServiceMock])

    expect(NotesServiceMock.save).toHaveBeenCalled()
    expect(NotesServiceMock.save).toHaveBeenCalledWith(noteToSend)
    expect(createdNote.id).toBe('abc')
  })

  it('and note.id is not defined', async () => {
    const noteToSend = {
      title: 'title',
      description: 'description',
      author: {
        id: 'abc123'
      }
    } as Note

    NotesServiceMock.save.mockResolvedValue(undefined)
    const createdNote = await saveNoteCommand(noteToSend, [NotesServiceMock])

    expect(NotesServiceMock.save).toHaveBeenCalled()
    expect(NotesServiceMock.save).toHaveBeenCalledWith(noteToSend)
    expect(createdNote).toBe(undefined)
  })

  it.each([
    {
      state: {},
      error: NoteErrors.RequiredTitle
    },
    {
      state: {
        title: 'title'
      },
      error: NoteErrors.RequiredDescription
    },
    {
      state: {
        title: 'title',
        description: 'description',
        author: {}
      },
      error: NoteErrors.RequiredAuthorId
    }
  ])('and i have properties issues', async ({ state, error }) => {
    try {
      await saveNoteCommand(state as unknown as Note, [NotesServiceMock])
    } catch (e) {
      if (e instanceof Error) {
        expect(e.message).toBe(error)
      }
    }
  })
})
