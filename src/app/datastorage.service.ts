import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Projectdata } from './projectdata';

@Injectable({
  providedIn: 'root'
})
export class Datastorage {
  private mystorage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this.mystorage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: Projectdata) {
    this.mystorage?.set(key, value);
  }
}
