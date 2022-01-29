import { createFeatureSelector, createSelector } from "@ngrx/store";
import { iPlatformState } from "./platform.state";

export const PLATFORM_STATE_NAME = 'platform';

const platformState = createFeatureSelector<iPlatformState>(PLATFORM_STATE_NAME);

export const getHarmonic = createSelector(platformState, state => {return state.harmonicPatterns});
export const getCandle = createSelector(platformState, state => {return state.candlePatterns});
export const getClassic = createSelector(platformState, state => {return state.classicPatterns});

export const inputs = createSelector(platformState, state => {return state.inputs});

export const loading = createSelector(platformState, state => {return state.loading});