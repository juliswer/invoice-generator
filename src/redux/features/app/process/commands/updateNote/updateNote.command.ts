import { type Note } from '@/common/types/notes.type'
import { type INotesService } from '@/redux//features/app/services/NotesService/notesInterface.service'
import { type Command } from '../../command.type'
import { NoteErrors } from '../../errors/notes.errors.enum'

export const updateNoteCommand: Command<Note, [INotesService]> = (
  state,
  [notesService]
): Promise<Note> => {
  if (!state.id) throw new Error(NoteErrors.RequiredId)
  if (!state.title) throw new Error(NoteErrors.RequiredTitle)
  if (!state.description) throw new Error(NoteErrors.RequiredDescription)
  if (!state.author.id) throw new Error(NoteErrors.RequiredAuthorId)
  if (!state.createdAt) throw new Error(NoteErrors.RequiredCreatedAt)
  if (!state.updatedAt) throw new Error(NoteErrors.RequiredUpdatedAt)
  return notesService.update(state)
}
