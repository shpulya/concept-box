import {Component, OnInit} from '@angular/core';
import {NgModule, ErrorHandler} from '@angular/core';
import {Router} from '@angular/router';
import {AlertService, UserService, IdeaService} from '../_services/index';
import {HttpClientModule} from '@angular/common/http';
import {Idea, User} from '../_models';

@Component({
  moduleId: module.id.toString(),
  templateUrl: './idea.component.html'
})

export class IdeaComponent {

  email: string;
  currentUser: User;
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private ideaService: IdeaService,
    private userService: UserService,
    private alertService: AlertService) {

    // this.email = (atob(JSON.parse(localStorage.getItem('currentUser')))).split(':')[0];
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.email = this.currentUser.email;
  }

  addIdea() {
    this.loading = true;
    //this.userService.getUserByEmail(this.email).subscribe(user => { this.currentUser = user; });
    this.model.userId = this.currentUser.id;
    console.log(this.model);
    console.log(this.currentUser.id);
    this.ideaService.createIdea(this.model)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/user-profile']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}


