import { HttpService } from '@/common/services/http/http.service'
import { type FilterBase } from '@/common/types/filterBase.types'
import { type User } from '@/common/types/user.type'
import axios from 'axios'
import { Roles } from '@/common/enums/roles.enum'

export default class UserService extends HttpService {
  private readonly endpoint: string

  constructor() {
    super()
    this.endpoint = 'users'
  }

  async find({ limit, page, search }: FilterBase) {
    const { data } = await this.instance.get<{ count: number; users: User[] }>(
      `${this.endpoint}?limit=${limit}&page=${page}&search=${String(search)}`
    )
    return data
  }

  async findById(id: string) {
    const { data } = await this.instance.get<User>(`${this.endpoint}/${id}`)
    return data
  }

  async save(user: User) {
    const { data } = await this.instance.post<User>(`${this.endpoint}`, user)
    return data
  }

  async getGoogleUserData(accessToken: string) {
    try {
      const { data } = await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        {
          headers: { Authorization: `Bearer ${accessToken}` }
        }
      )
      return data
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }
      return {}
    }
  }

  async signUp(accessToken: string): Promise<User> {
    this.setToken(accessToken)
    localStorage.setItem('userAccessToken', accessToken)
    const user = await this.getGoogleUserData(accessToken)
    const { data } = await this.instance.post(this.endpoint, {
      email: user.email,
      firstName: user.given_name,
      lastName: user.family_name,
      image: user.picture,
      role: Roles.WRITER
    })
    window.location.replace('/')
    return data
  }

  async logIn(accessToken: string): Promise<User> {
    this.setToken(accessToken)
    localStorage.setItem('userAccessToken', accessToken)
    const user = await this.getGoogleUserData(accessToken)
    const userBody = {
      email: user.email,
      firstName: user.given_name,
      lastName: user.family_name,
      image: user.picture
    }
    const { data } = await this.instance.post(
      `${this.endpoint}/login`,
      userBody
    )
    return data
  }

  async uploadUserImage(userImage: File, userId: string): Promise<string> {
    const formData = new FormData()
    formData.append('userImage', userImage)

    const { data } = await this.instance.post(
      `${this.endpoint}/image/${userId}`,
      formData
    )
    return data
  }
}

export const userService = new UserService()
