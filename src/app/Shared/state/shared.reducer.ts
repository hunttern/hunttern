import { createReducer, on } from "@ngrx/store";
import { setErrorMessage, setLoading } from "./shared.action";
import { initialState } from "./shared.state";

export const sharedReducer = createReducer(initialState,
    on(setLoading, (state,action) => {
        return {
            ...state,
            showLoading: action.status
        }
    }),
    on(setErrorMessage, (state,action) => {
        return {
            ...state,
            errorMessage: action.message
        }
    })
)