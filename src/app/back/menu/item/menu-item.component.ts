import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-back-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
    constructor() { }

    @Input()
    item: any;

    ngOnInit(): void { }
}
