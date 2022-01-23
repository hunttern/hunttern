import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { setErrorMessage, setLoading } from "src/app/Shared/state/shared.action";
import { iAppState } from "src/app/State/app.state";
import { AuthService } from "../Services/auth.service";
import { loginStart, loginSuccess, setRole } from "./user.action";

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions,private authService: AuthService,private store: Store<iAppState>,private _snackBar: MatSnackBar,private router: Router) {}
    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                return this.authService.login(action.loginForm).pipe(
                    map((data) => {
                        const user = this.authService.formatUser(data);
                        this.store.dispatch(setLoading({status: false}));
                        this.store.dispatch(setRole({role: data.role}));
                        this.router.navigate(['/platform']);
                        return loginSuccess({user: user});
                    }),
                    catchError((errResp) => {
                        this.store.dispatch(setLoading({ status: false }));
                        const errorMessage = errResp.error.errors[0];
                        this._snackBar.open(errorMessage, 'close',
                        {
                            horizontalPosition: 'center',
                            verticalPosition: 'top',
                            duration: 5000
                        }
                        )
                        return of(setErrorMessage({ message: errorMessage }));
                    })
                );
            })
        );
    });
}