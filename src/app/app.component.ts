import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'apps'
    },
    {
      title: 'Advanced',
      url: '/advanced',
      icon: 'terminal'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'toggle'
    }
  ];
  constructor() {}
}
