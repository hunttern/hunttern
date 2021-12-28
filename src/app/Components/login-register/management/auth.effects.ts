import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs/operators";
import { AuthService } from "../Services/auth.service";
import { loginStart, loginSuccess } from "./user.action";

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions,private authService: AuthService) {}
    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                return this.authService.login(action.loginForm).pipe(
                    map((data) => {
                        const user = this.authService.formatUser(data);
                        return loginSuccess({user: user});
                    })
                );
            })
        );
    });
}