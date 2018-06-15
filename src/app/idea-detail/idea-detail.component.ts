import { Component, OnInit } from '@angular/core';
// import { IdeaDetailService } from '../_services/idea-detail.service';
import { NgModule, ErrorHandler } from '@angular/core';
import {Router} from '@angular/router';
import {AlertService, UserService} from '../_services/index';
import { HttpClientModule } from '@angular/common/http';

@Component ({
  moduleId: module.id.toString(),
  templateUrl: './idea-detail.component.html'
})

export class IdeaDetailComponent   {
  // model: any = {};
  // loading = false;
  constructor(
    private router: Router,
    // private ideaService: IdeaService,
    private alertService: AlertService) { }
}
