import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    constructor() { }

    onSubmit({value, valid}, e: Event) {
        // console.log(value, valid);
        // e.preventDefault();
        // if (!valid) {
        //     return;
        // }
        // this.store$.dispatch(
        //     new actions.RegisterAction(value));
    }

    ngOnInit(): void { }
}
