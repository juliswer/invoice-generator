export type Command<State, Dependencies = []> = (
  state: State,
  dependencies: Dependencies
) => Promise<State>
