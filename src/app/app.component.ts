import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
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
    },
    {
      title: 'Create',
      url: '/create',
      icon: 'add'
    }
  ];
  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
  }
}
