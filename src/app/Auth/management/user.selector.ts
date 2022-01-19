import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./user.state";

export const AUTH_STATE_NAME = 'auth';

const getTokenState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);
export const getToken = createSelector(getTokenState, state => {return state;});
export const getUserRole = createSelector(getTokenState, state => {return state.role})