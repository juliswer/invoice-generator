import { type Note } from '@/common/types/notes.type'
import { saveNoteCommand } from '@/redux/features/app/process/commands/saveNote/saveNote.command'
import { createCommandStack } from '@/redux/features/app/process/create-command.stack'
import { notesService } from '@/redux/features/app/services/NotesService/notes.service'
import { openToastSuccess } from '@/redux/store/ui/ui.slice'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const saveNote = createAsyncThunk<Note, Note>(
  'app/saveNote',
  async (note: Note, { dispatch }) => {
    const cStack = createCommandStack<Note>(note)

    const result = await cStack.execute([
      (state) => saveNoteCommand(state, [notesService])
    ])

    dispatch(openToastSuccess('Note created successfully'))

    return result
  }
)
