import { createAction, props } from "@ngrx/store";

export const SET_LOADING = '[shared] set loading status';
export const SET_ERROR_MESSAGE = '[shared] set error message';

export const setLoading = createAction(SET_LOADING, props<{status: boolean}>());
export const setErrorMessage = createAction(SET_ERROR_MESSAGE, props<{message: string}>())