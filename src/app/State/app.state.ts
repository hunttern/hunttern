import { AuthReducer } from "../Auth/management/user.reducer";
import { AuthState } from "../Auth/management/user.state";

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