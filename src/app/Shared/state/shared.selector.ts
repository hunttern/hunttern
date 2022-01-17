import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SharedState } from "./shared.state";

export const SHARED_STATE_NAME = 'shared';

const getShared = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const getLoading = createSelector(getShared, (state) => {return state.showLoading});
export const getErrorMessage = createSelector(getShared, (state) => {return state.errorMessage});