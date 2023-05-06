import { type ActionReducerMapBuilder } from '@reduxjs/toolkit'
import {
  initialAppState,
  type AppState
} from '@/redux/features/app/store/app.slice'
import { findNotes } from '@/redux/features/app/actions/notes/findNotes/findNotes'
import { findNoteById } from '@/redux/features/app/actions/notes/findNoteById/findNoteById'
import { deleteNote } from '@/redux/features/app/actions/notes/deleteNote/deleteNote'
import { saveNote } from '@/redux/features/app/actions/notes/saveNote/saveNote'
import { updateNote } from '@/redux/features/app/actions/notes/updateNote/updateNote'

export function notesExtraReducers(
  builder: ActionReducerMapBuilder<AppState>
): void {
  // Find Notes
  builder.addCase(findNotes.pending, (state) => {
    state.isLoading = true
  })
  builder.addCase(findNotes.fulfilled, (state, { payload }) => {
    state.isLoading = false
    state.notes = payload.notes
    state.isOpenDrawer = false
    state.notesCount = payload.count
  })
  builder.addCase(findNotes.rejected, (state) => {
    state.isLoading = false
  })
  // Find Note by Id
  builder.addCase(findNoteById.pending, (state) => {
    state.isLoading = true
  })
  builder.addCase(findNoteById.fulfilled, (state, { payload }) => {
    state.isLoading = false
    state.note = payload
  })
  builder.addCase(findNoteById.rejected, (state) => {
    state.isLoading = false
  })
  // Delete Note
  builder.addCase(deleteNote.pending, (state) => {
    state.isLoading = true
  })
  builder.addCase(deleteNote.fulfilled, (state, { payload }) => {
    state.isLoading = false
    state.note = payload
    state.notes = state.notes.filter((note) => note.id !== payload.id)
  })
  builder.addCase(deleteNote.rejected, (state) => {
    state.isLoading = false
  })
  // Save Note
  builder.addCase(saveNote.pending, (state) => {
    state.isLoading = true
  })
  builder.addCase(saveNote.fulfilled, (state) => {
    state.isLoading = false
    state.isOpenDrawer = false
    state.note = initialAppState.note
  })
  builder.addCase(saveNote.rejected, (state) => {
    state.isLoading = false
  })
  // Update Note
  builder.addCase(updateNote.pending, (state) => {
    state.isLoading = true
  })
  builder.addCase(updateNote.fulfilled, (state, { payload }) => {
    state.isLoading = false
    state.note = payload
    state.notes[state.notes.findIndex((i) => i.id === payload.id)] = payload
  })
  builder.addCase(updateNote.rejected, (state) => {
    state.isLoading = false
  })
}
