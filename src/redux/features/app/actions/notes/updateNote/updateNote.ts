import { type Note } from '@/common/types/notes.type'
import { updateNoteCommand } from '@/redux/features/app/process/commands/updateNote/updateNote.command'
import { createCommandStack } from '@/redux/features/app/process/create-command.stack'
import { notesService } from '@/redux/features/app/services/NotesService/notes.service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { openToastSuccess } from '@/redux/store/ui/ui.slice'

export const updateNote = createAsyncThunk<Note, Note>(
  'app/updateNote',
  async (note, { dispatch }) => {
    const cStack = createCommandStack<Note>(note)

    const stateResult = await cStack.execute([
      (state) => updateNoteCommand(state, [notesService])
    ])

    dispatch(openToastSuccess('Note updated successfully'))

    return stateResult
  }
)
