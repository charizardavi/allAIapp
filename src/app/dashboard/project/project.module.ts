import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectPageRoutingModule } from './project-routing.module';

import { ProjectPage } from './project.page';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectPageRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [ProjectPage]
})
export class ProjectPageModule {}
