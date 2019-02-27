import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/domian/type.module';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    constructor() { }

    types: Type[] = [
        {value: 'member', viewValue: '会员'},
        {value: 'user', viewValue: '管理'}
      ];

    ngOnInit(): void { }
}
