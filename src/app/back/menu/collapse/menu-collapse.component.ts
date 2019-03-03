import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'app-back-menu-collapse',
    templateUrl: './menu-collapse.component.html',
    styleUrls: ['./menu-collapse.component.scss']
})
export class MenuCollapseComponent implements OnInit {

    @Input()
    item: any;

    @HostBinding('class')
    classes = 'navigation-collapse navigation-item';

    @HostBinding('class.open')
    public isOpen = false;

    constructor() { }

    ngOnInit(): void { }
}
