export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'CHANGE-STATUS':
      return { ...state, status: action.status }
    case 'SET-ERROR':
      return { ...state, error: action.error }

    default:
      return state
  }
}

export const changeStatusAC = (status: RequestStatusType) => {
  return { type: 'CHANGE-STATUS', status } as const
}

export const setErrorAC = (error: string | null) => {
  return { type: 'SET-ERROR', error } as const
}

type ChangeStatusACType = ReturnType<typeof changeStatusAC>
type SetErrorACType = ReturnType<typeof setErrorAC>

type ActionsType = ChangeStatusACType | SetErrorACType
