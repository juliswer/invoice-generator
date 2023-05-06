import { constants } from '@/common/constants/app.constants'
import { type ITokenService } from '@/common/services/token/IToken.service'
import { ILocalStorageService } from '../local-storage/ILocalStorage.service'

interface ICredentials {
  access_token: string
}

export class TokenService implements ITokenService {
  constructor(private readonly localStorageService: ILocalStorageService) {}

  getLoggedInUserCredentials(): ICredentials | undefined {
    const credentials = this.localStorageService.getItem<ICredentials>(
      constants.tokenKey
    )

    if (!credentials) return undefined

    return credentials
  }

  getToken(): string | undefined {
    const credentials = this.getLoggedInUserCredentials()

    if (!credentials) return undefined
    return credentials.access_token
  }
}
