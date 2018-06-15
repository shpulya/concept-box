import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../_services/idea.service';
import { NgModule, ErrorHandler } from '@angular/core';
import {Router} from '@angular/router';
import {AlertService, UserService} from '../_services/index';
import { HttpClientModule } from '@angular/common/http';


@Component ({
  moduleId: module.id.toString(),
  templateUrl: './idea.component.html'
})

export class IdeaComponent   {

  // model: any = {};
  // loading = false;

  constructor(
    private router: Router,
    // private ideaService: IdeaService,
    private alertService: AlertService) { }

  setNewIdea(): void {
    this.router.navigate([`/idea-detail`]);
  }
}


