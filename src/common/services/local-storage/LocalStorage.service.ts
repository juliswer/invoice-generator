import { ILocalStorageService } from './ILocalStorage.service'

export const localStorageService: ILocalStorageService = {
  getItem<T>(key: string): T | null {
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : null
    } catch (error) {
      return null
    }
  },
  setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value))
  },
  removeItem(key: string): void {
    localStorage.removeItem(key)
  }
}
