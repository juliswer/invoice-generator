import { type Note } from '@/common/types/notes.type'
import { notesService } from '@/redux/features/app/services/NotesService/notes.service'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const findNoteById = createAsyncThunk<Note, string>(
  'app/findNoteById',
  (id) => notesService.findById(id)
)
