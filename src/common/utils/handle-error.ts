import { isAxiosError } from "axios"
import { Dispatch } from "redux"
import { setErrorAC } from "../../app/app-reducer"

export const handleError = (dispatch: Dispatch, e: any) => {
    let errorMessage: string
    if (isAxiosError<ServerError>(e)) {
      errorMessage = e.response ? e.response.data.errorMessages[0].message : e.message
    } else {
      errorMessage = (e as Error).message
    }

    dispatch(setErrorAC(errorMessage))
  }

  type ErrorMessageType = {
    field: string
    message: string
  }
  type ServerError = {
    errorMessages: ErrorMessageType[]
  }