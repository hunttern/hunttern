import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "./users.model";

export const AUTH_STATE_NAME = 'auth';

const getTokenState = createFeatureSelector<any>(AUTH_STATE_NAME);
export const getToken = createSelector(getTokenState, state => {
    return state;
});