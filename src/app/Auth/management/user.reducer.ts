import { createReducer, on } from "@ngrx/store";
import { loginSuccess, logout, registerSuccess, setRole } from "./user.action";
import { initailState } from "./user.state";

const _authReducer = createReducer(initailState,
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    }),
    on(registerSuccess, (state, action) => {
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
    }),
    on(setRole, (state,action) => {
        return{
            ...state,
            role: action.role
        }
    })
);

export function AuthReducer(state: any,action: any){
    return _authReducer(state,action)
}
