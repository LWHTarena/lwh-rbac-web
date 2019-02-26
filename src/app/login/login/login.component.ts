import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/domian/type.module';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor() { }

    types: Type[] = [
        {value: 'member', viewValue: '会员'},
        {value: 'user', viewValue: '管理'}
      ];

    ngOnInit(): void { }
}
