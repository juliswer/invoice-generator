import { notesService } from '@/redux/features/app/services/NotesService/notes.service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Note } from '@/common/types/notes.type'
import { FilterBase } from '@/common/types/filterBase.types'

export const findNotes = createAsyncThunk<
  { count: number; notes: Note[] },
  FilterBase
>('app/findNotes', (filters) => notesService.find(filters))
