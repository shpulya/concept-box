import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AlertService, TagsService, UserService} from '../_services/index';

@Component({
  moduleId: module.id.toString(),
  templateUrl: 'register.component.html'
})

export class RegisterComponent  implements OnInit{
  model: any = {};
  loading = false;
  tagsList: any = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
    private tagsService: TagsService) {
  }

  ngOnInit() {
    this.loadTags();
  }

  private loadTags() {
    this.tagsService.getAllTags().subscribe(tags => this.tagsList = tags);
  }


  register() {
    this.loading = true;

    this.model.tags = JSON.stringify(this.model.tags, null);
    this.userService.create(this.model)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
