import { createAction, props } from "@ngrx/store";
import { User } from "./users.model";

export const USER_LOGIN_START = '[auth page] login start';
export const LOGIN_ROLE = '[main page] set role';
export const USER_LOGIN_SUCCESS = '[auth page] login success';
export const USER_LOGIN_FAIL = '[auth page] login fail';
export const USER_LOGOUT = '[auth page] logout';
export const USER_REGISTER_START = '[auth page] register start';
export const USER_REGISTER_SUCCESS = '[auth page] register success';
export const USER_REGISTER_FAIL = '[auth page] register fail';

export const loginStart = createAction(USER_LOGIN_START, props<{loginForm: {email: string, password: string}}>());
export const registerStart = createAction(USER_LOGIN_START, props<{registerForm: {email: string, password: string}}>());
export const loginSuccess = createAction(USER_LOGIN_SUCCESS, props<{user: User}>());
export const registerSuccess = createAction(USER_LOGIN_SUCCESS, props<{user: User}>());
export const setRole = createAction(LOGIN_ROLE, props<{role: string}>());
export const loginFail = createAction(USER_LOGIN_FAIL, props<{message: string}>());
export const registerFail = createAction(USER_LOGIN_FAIL, props<{message: string}>());
export const USER_REGISTER = createAction('USER_REGISTER');
export const logout = createAction(USER_LOGOUT);