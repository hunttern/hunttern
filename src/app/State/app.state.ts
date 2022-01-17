import { AuthReducer } from "../Components/login-register/management/user.reducer";
import { AuthState } from "../Components/login-register/management/user.state";

import { sharedReducer } from "../Shared/state/shared.reducer";
import { SharedState } from "../Shared/state/shared.state";

export interface iAppState{
    auth: AuthState,
    shared: SharedState
}
export const AppState = {
    auth: AuthReducer,
    shared: sharedReducer
}