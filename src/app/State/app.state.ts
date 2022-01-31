import { AuthReducer } from "../Auth/management/user.reducer";
import { AuthState } from "../Auth/management/user.state";

import { sharedReducer } from "../Shared/state/shared.reducer";
import { SharedState } from "../Shared/state/shared.state";

import { iPlatformState } from '../platform/State/platform.state';
import { PlatformReducer } from '../platform/State/platform.reducer';

export interface iAppState{
    auth: AuthState,
    shared: SharedState,
    platform: iPlatformState
}
export const AppState = {
    auth: AuthReducer,
    shared: sharedReducer,
    platform: PlatformReducer
}