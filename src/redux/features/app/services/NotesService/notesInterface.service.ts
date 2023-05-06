import { type FilterBase } from '@/common/types/filterBase.types'
import { Note } from '@/common/types/notes.type'

export interface INotesService {
  find: ({ limit, page, search }: FilterBase) => any

  findById: (id: string) => any

  save: (note: Note) => any

  update: (note: Note) => any

  delete: (id: string) => any
}
