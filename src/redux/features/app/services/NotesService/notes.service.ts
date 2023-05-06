import { HttpService } from '@/common/services/http/http.service'
import { type FilterBase } from '@/common/types/filterBase.types'
import { Note } from '@/common/types/notes.type'
import { type INotesService } from '@/redux/features/app/services/NotesService/notesInterface.service'

export default class NotesService extends HttpService implements INotesService {
  private readonly endpoint: string

  constructor() {
    super()
    this.endpoint = 'notes'
  }

  async find({ limit, page, search }: FilterBase) {
    const { data } = await this.instance.get(
      `${this.endpoint}?limit=${limit}&page=${page}&search=${String(search)}`
    )
    return data
  }

  async findById(id: string) {
    const { data } = await this.instance.get(`${this.endpoint}/${id}`)
    return data
  }

  async save(note: Note) {
    const { data } = await this.instance.post(`${this.endpoint}/`, note)
    return data
  }

  async update(note: Note) {
    const { data } = await this.instance.patch(
      `${this.endpoint}/${note.id}`,
      note
    )
    return data
  }

  async delete(id: string) {
    const { data } = await this.instance.delete(`${this.endpoint}/${id}`)

    return data
  }
}

export const notesService = new NotesService()
