import { Component, OnInit } from '@angular/core';
import { NgModule, ErrorHandler } from '@angular/core';
import {Router} from '@angular/router';
import {AlertService, UserService, IdeaService} from '../_services/index';
import { HttpClientModule } from '@angular/common/http';
import {Idea, User} from '../_models';

@Component ({
  moduleId: module.id.toString(),
  templateUrl: './idea-detail.component.html'
})

export class IdeaDetailComponent   {
  email: string;
  ideaId: number;
  idea: Idea;
  currentUser: User;
  userId: number;

  constructor(
    private router: Router,
    private ideaService: IdeaService,
    private userService: UserService,
    private alertService: AlertService) {
      this.email = (atob(JSON.parse(localStorage.getItem('currentUser')))).split(':')[0];
      this.ideaService.getIdeaById(this.ideaId).subscribe(idea => { this.idea = idea; });
      this.userId = this.idea.userId;
      this.userService.getById(this.userId).subscribe(user => { this.currentUser = user; });
  }
}
