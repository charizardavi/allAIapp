import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Projectdata } from 'src/app/projectdata';
import { HttpClient } from '@angular/common/http';
import { interval, Observable, Observer, Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PythonService } from 'src/app/python.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {
  incomingProjectName: string;
  incomingProject: Projectdata;
  public progress: any;
  subscription !: Subscription;

  constructor(private activatedRoute: ActivatedRoute, public router: Router, private python: PythonService) {
    this.incomingProjectName = this.activatedRoute.snapshot.paramMap.get('projectname');
    if (router.getCurrentNavigation().extras.state) {
      this.incomingProject = router.getCurrentNavigation().extras.state as unknown as Projectdata;
    }
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



  stopProgressBar(){
    this.subscription.unsubscribe();
  }

}
