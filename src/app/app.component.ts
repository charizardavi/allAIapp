import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'apps'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'toggle'
    },
    {
      title: 'Advanced',
      url: '/home',
      icon: 'terminal'
    }
  ];
  constructor() {}
}
