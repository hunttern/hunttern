import { FormGroup } from "@angular/forms";
import { createAction, props } from "@ngrx/store";
import { User } from "./users.model";

export const USER_LOGIN_START = '[auth page] login start';
export const USER_LOGIN_SUCCESS = '[auth page] login success';
export const USER_LOGIN_FAIL = '[auth page] login fail';

export const loginStart = createAction(USER_LOGIN_START, props<{loginForm: FormGroup}>());
export const loginSuccess = createAction(USER_LOGIN_SUCCESS, props<{user: User}>());
export const loginFail = createAction(USER_LOGIN_FAIL);
export const USER_REGISTER = createAction('USER_REGISTER');
export const USER_LOGOUT = createAction('USER_LOGOUT');