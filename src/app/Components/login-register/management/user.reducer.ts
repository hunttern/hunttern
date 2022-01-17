import { createReducer, on } from "@ngrx/store";
import { loginSuccess, logout } from "./user.action";
import { initailState } from "./user.state";

const _authReducer = createReducer(initailState,
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    }),
    on(logout, (state) => {
        return {
            ...state,
            user: null
        }
    })
);

export function AuthReducer(state: any,action: any){
    return _authReducer(state,action)
}
