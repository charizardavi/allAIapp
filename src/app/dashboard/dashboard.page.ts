import { Component, OnInit } from '@angular/core';
import { Projectdata } from '../projectdata';
import { Projecttype } from '../projecttype';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public projects: Projectdata[];
  public firstlaunch: boolean;
  projectlen: number;
  tempProjectDataArray: Projectdata[];
  tempProjectData: Projectdata;
  public myRoute: string;
  public readyToLoad = false;
  oldprojects: Projectdata[];

  constructor(private dashboardstorage: Storage, public nav: NavController, public router: Router) {
    this.projects = [];
    this.myRoute = '/dashboard/project/';
    // if (router.getCurrentNavigation().extras.state) {
    //   console.log('proj way before', this.projects);
    //   const incomingNewProject = this.router.getCurrentNavigation().extras.state;
    //   console.log(incomingNewProject.name, incomingNewProject.projectType);
    //   console.log('the projs before push', this.projects);
    //   this.projects.push({name:incomingNewProject.name, type: Projecttype.image, trained:true, typestring: 'image'});
    //   console.log('the projs after push', this.projects);
    //   // this.storageSet();
    //   // this.loadProjects();
    //   // this.readyToLoad = true;
    // }
  }

  async ngOnInit() {
    this.oldprojects = this.projects;

    if (this.router.getCurrentNavigation().extras.state) {
      const incomingNewProject = this.router.getCurrentNavigation().extras.state;
      await this.storageGet();
      // await this.delay(200);
      await this.loadProjects();
      // await this.delay(200);
      // this.projects.push({name:incomingNewProject.name, type: Projecttype.image, trained:true, typestring: 'image'});
      this.projects = this.projects.concat([{name:incomingNewProject.name, type: Projecttype.image, trained:true, typestring: 'image'}]);
      await this.delay(200);
      if (this.projects !== this.oldprojects){
        console.log('not equal');
        await this.storageSet();
        // await this.delay(200);
        await this.storageGet();
        // await this.delay(200);
        await this.loadProjects();
      }
    }
    else{
      await this.storageGet();
      // await this.delay(200);
      await this.loadProjects();
    }

  }

  async loadProjects() {
    for (let i = 0; i < this.projectlen; i++) {
      this.tempProjectDataArray = await this.dashboardstorage.get(
        'projects'
      ) as Promise<Projectdata[]> as unknown as Projectdata[];
      this.projects = this.tempProjectDataArray;
    }
  }

  async storageSetFirstTime() {
    this.dashboardstorage.set('projectlen', 3);
    this.dashboardstorage.set('projects', [
      {
        name: 'hi',
        type: Projecttype.image,
        trained: true,
        typestring: 'image',
      },
      {
        name: 'bye',
        type: Projecttype.sound,
        trained: true,
        typestring: 'sound',
      },
      {
        name: 'soidk',
        type: Projecttype.wordsentiment,
        trained: true,
        typestring: 'language',
      },
    ]);
  }

  async storageSet() {
    await this.dashboardstorage.set('projectlen', 3);
    await this.dashboardstorage.set('projects', this.projects);
  }

  async storageGet() {
    this.projectlen = (await this.dashboardstorage.get(
      'projectlen'
    )) as Promise<number> as unknown as number;
  }

  goToDashboard(navProjName: string, sendProject: Projectdata) {
    this.nav.navigateForward('/dashboard/project/' + navProjName, {
      state: sendProject,
    });
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  // public createProject(newProjectName: string, projectType: number) {
  //   if (true) {
  //     this.projects.concat([
  //       {
  //         name: newProjectName,
  //         type: Projecttype.image,
  //         trained: false,
  //         typestring: 'image',
  //       },
  //     ]);
  //   }
  // }
}
