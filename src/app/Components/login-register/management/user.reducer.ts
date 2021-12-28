import { createReducer, on } from "@ngrx/store";
import { loginSuccess, USER_LOGIN_START } from "./user.action";
import { initailState } from "./user.state";

const _authReducer = createReducer(initailState,
    on(loginSuccess, (state: any, action) => {
        return {
            ...state,
            user: action.user
        }
    })
);

export function AuthReducer(state: any,action: any){
    return _authReducer(state,action)
}
