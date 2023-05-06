import { User } from './user.type'

export type Note = {
  id: string
  author: User
  title: string
  description: string
  createdAt: Date
  updatedAt: Date
}
