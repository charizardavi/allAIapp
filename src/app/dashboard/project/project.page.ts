import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Projectdata } from 'src/app/projectdata';

@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {
  incomingProjectName: string;
  incomingProject: Projectdata;
  constructor(private activatedRoute: ActivatedRoute, public router: Router) {
    this.incomingProjectName = this.activatedRoute.snapshot.paramMap.get('projectname');
    if (router.getCurrentNavigation().extras.state){
      this.incomingProject = router.getCurrentNavigation().extras.state as unknown as Projectdata;
    }
  }

  ngOnInit() {
  }

}
