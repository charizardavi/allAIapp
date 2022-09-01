import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Projectdata } from 'src/app/projectdata';
import { HttpClient } from '@angular/common/http';
import { interval, Observable, Observer, Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PythonService } from 'src/app/python.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';



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
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private activatedRoute: ActivatedRoute, public router: Router, private python: PythonService, config: NgbCarouselConfig) {
    this.incomingProjectName = this.activatedRoute.snapshot.paramMap.get('projectname');
    if (router.getCurrentNavigation().extras.state) {
      this.incomingProject = router.getCurrentNavigation().extras.state as unknown as Projectdata;
    }
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
    config.pauseOnHover = true;
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
