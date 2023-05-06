interface ICredentials {
  access_token: string
}

export interface ITokenService {
  getLoggedInUserCredentials: () => ICredentials | undefined
  getToken: () => string | undefined
}
