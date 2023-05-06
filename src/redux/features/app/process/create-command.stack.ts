import { toast } from 'react-toastify'
import { type Command } from '@/redux/features/app/process/command.type'

export function createCommandStack<State>(state: State) {
  return {
    async execute(commands: Array<Command<State>>): Promise<State> {
      try {
        for await (const command of commands) {
          state = await command(state, [])
        }
        return state
      } catch (error) {
        if (error instanceof Error) {
          toast.error(`${error.message} 😮`)
        }
        throw error
      }
    }
  }
}
