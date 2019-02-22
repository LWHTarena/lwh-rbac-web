import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor() { }

    onSubmit({value, valid}, ev: Event) {
        // ev.preventDefault();
        // if (!valid) {
        //     return;
        // }
        // this.store$.dispatch(
        //     new authActions.LoginAction({
        //         email: value.email,
        //         password: value.password
        //     }));
    }

    ngOnInit(): void { }
}
