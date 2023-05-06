import { Roles } from '../enums/roles.enum'
import { Note } from './notes.type'

export type User = {
  id: string
  firstName: string
  lastName: string
  notes: Note[]
  role: Roles
  createdAt: Date
  updatedAt: Date
  image: string
}
