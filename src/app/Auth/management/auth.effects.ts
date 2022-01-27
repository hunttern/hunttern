import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { setErrorMessage, setLoading } from "src/app/Shared/state/shared.action";
import { iAppState } from "src/app/State/app.state";
import { AuthService } from "../Services/auth.service";
import { loginStart, loginSuccess, registerStart, registerSuccess, setRole } from "./user.action";

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions,private authService: AuthService,private store: Store<iAppState>,
        private _snackBar: MatSnackBar,private router: Router,private dialog: MatDialog) {}
    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                return this.authService.login(action.loginForm).pipe(
                    map((data: any) => {
                        const user = this.authService.formatUser(data);
                        this.store.dispatch(setLoading({status: false}));
                        this.store.dispatch(setRole({role: data.data.roles[0].name}));
                        this.dialog.closeAll();
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
                        })
                        return of(setErrorMessage({ message: errorMessage }));
                    })
                );
            })
        );
    });
    register$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(registerStart),
            exhaustMap((action) => {
                return this.authService.register(action.registerForm).pipe(
                    map((data: any) => {
                        const user = this.authService.formatUser(data);
                        this.store.dispatch(setLoading({status: false}));
                        this.store.dispatch(setRole({role: data.role}));
                        this.dialog.closeAll();
                        this.router.navigate(['/platform']);
                        return registerSuccess({user: user});
                    })
                )
            })
        )
    })
}