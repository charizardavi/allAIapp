import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Projectdata } from 'src/app/projectdata';
import { HttpClient } from '@angular/common/http';
import { interval, Observable, Observer, Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PythonService } from 'src/app/python.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import * as jQuery from 'jquery';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {
  incomingProjectName: string;
  incomingProject: Projectdata;
  public progress: any;
  subscription!: Subscription;
  // images;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  categories: any[];
  public obj: any = {};


  speeds: ['Basic', ''];


  constructor(
    private activatedRoute: ActivatedRoute,
    public router: Router,
    private python: PythonService,
    config: NgbCarouselConfig
  ) {
    this.incomingProjectName =
      this.activatedRoute.snapshot.paramMap.get('projectname');
    if (router.getCurrentNavigation().extras.state) {
      this.incomingProject = router.getCurrentNavigation().extras
        .state as unknown as Projectdata;
    }
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    // this.subscription = timer(0, 5000).pipe(
    //   switchMap(() => this.python.getPosts())
    // ).subscribe(result => {
    //   if (this.router.url.includes('project')){
    //     console.log(result);
    //   }
    //   else {
    //     this.subscription.unsubscribe();
    //   }
    // }
    // );
  }

  stopProgressBar() {
    this.subscription.unsubscribe();
  }
  removeImg() {
    console.log('clicked');
  }

  onFileSelect(input) {
    console.log(input.files);

    if (input.files && input.files[0]) {
      for (const item of input.files) {
        if (item) {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            console.log('Got here: ', e.target.result);
            this.obj.photoUrl = e.target.result;
          };
          reader.readAsDataURL(item);
        }
        else{
          break;
        }
      }
    }
  }

}
