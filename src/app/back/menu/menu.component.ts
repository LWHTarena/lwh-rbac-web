import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-back-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    constructor() { }

    @Input()
    menuModel: any[];

    ngOnInit(): void { }
}

