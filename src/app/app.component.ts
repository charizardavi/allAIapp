import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages = [
    {
      title: 'Schedule',
      url: '/dashboard',
      icon: 'apps'
    },
    {
      title: 'Settings',
      url: '/home',
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
