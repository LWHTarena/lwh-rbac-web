import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-back-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    menuModel: any[];

    constructor() {
        this.menuModel = [
            {id: '1', title: '控制面板', type: 'item', icon: 'fa fa-tachometer', url: ''},
            {id: '2', title: '权限管理', type: 'collapse', icon: 'fa fa-tasks',
               children: [
                   {id: '1', title: '用户维护', type: 'item', icon: 'fa fa-tachometer', url: ''},
                   {id: '1', title: '角色维护', type: 'item', icon: 'fa fa-tachometer', url: ''},
                   {id: '1', title: '许可维护', type: 'item', icon: 'fa fa-tachometer', url: ''},
               ]
            },
            {id: '3', title: '业务审核', type: 'collapse', icon: 'fa fa-industry',
                children: [
                    {id: '1', title: '实名认证审核', type: 'item', icon: 'fa fa-tachometer', url: ''},
                    {id: '1', title: '广告审核', type: 'item', icon: 'fa fa-tachometer', url: ''},
                    {id: '1', title: '项目审核', type: 'item', icon: 'fa fa-tachometer', url: ''},
                ]
            },
            {id: '4', title: '业务管理', type: 'collapse', icon: 'fa fa-th-large',
                children: [
                    {id: '1', title: '资质维护', type: 'item', icon: 'fa fa-tachometer', url: ''},
                    {id: '1', title: '分类管理', type: 'item', icon: 'fa fa-tachometer', url: ''},
                    {id: '1', title: '流程管理', type: 'item', icon: 'fa fa-tachometer', url: ''},
                    {id: '1', title: '广告管理', type: 'item', icon: 'fa fa-tachometer', url: ''},
                    {id: '1', title: '消息模板', type: 'item', icon: 'fa fa-tachometer', url: ''},
                    {id: '1', title: '项目分类', type: 'item', icon: 'fa fa-tachometer', url: ''},
                    {id: '1', title: '项目标签', type: 'item', icon: 'fa fa-tachometer', url: ''},
                ]
            },
            {id: '5', title: '参数管理', type: 'item', icon: 'fa fa-table', url: ''}
        ];
    }





    ngOnInit(): void { }
}
