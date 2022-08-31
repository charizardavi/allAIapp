import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DashboardPage } from '../dashboard/dashboard.page';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  public selectedType: number;
  public projectNotNamed = null;
  public projectNameValue: string;

  public projectTypes = [
    {
      title: 'Dashboard',
      class: 'normalType',
      image: 'assets/bird.jpg',
      description: 'thing',
    },
    {
      title: 'Dashboard',
      class: 'comingSoon',
      image: 'assets/bird.jpg',
      description: 'coming soon!',
    },
  ];

  constructor(public nav: NavController) {

  }

  ngOnInit() {
  }
  typeClick(typeNumber: number) {
    for (const types of this.projectTypes) {
      if (types.class !== 'comingSoon') {
        types.class = 'normalClass';
        this.selectedType = 1000;
      }
    }
    if (this.projectTypes[typeNumber].class !== 'comingSoon') {
      this.projectTypes[typeNumber].class = 'active';
      this.selectedType = typeNumber;
    }
  }
  goToCreateProject(){
    if ((this.projectNameValue !== undefined ||
      this.projectNameValue !== '' ||
      this.projectNameValue !== null)
      && this.selectedType === 0){
      this.nav.navigateForward('/dashboard', { state: {name: this.projectNameValue, projectType: this.selectedType} });
    }
  }
}
