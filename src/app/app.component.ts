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
      url: '/home',
      icon: 'apps'
    },
    {
      title: 'Speakers',
      url: '/home',
      icon: 'people'
    },
    {
      title: 'Map',
      url: '/home',
      icon: 'toggle'
    },
    {
      title: 'About',
      url: '/home',
      icon: 'terminal'
    }
  ];
  constructor() {}
}
