import {Component, OnInit} from '@angular/core';
import {NgModule, ErrorHandler} from '@angular/core';
import {Router} from '@angular/router';
import {AlertService, UserService, IdeaService} from '../_services/index';
import {HttpClientModule} from '@angular/common/http';
import {Idea, User} from '../_models';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  moduleId: module.id.toString(),
  templateUrl: './idea-detail.component.html'
})

export class IdeaDetailComponent {
  email: string;
  ideaId: number;
  idea: any ={};
  currentUser: User;
  userId: number;
  author: any = {};
  likeColor: string ;
  private routeSubscription: Subscription;

  constructor(
    private router: Router,
    private ideaService: IdeaService,
    private userService: UserService,
    private alertService: AlertService,
    private route: ActivatedRoute) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.email = this.currentUser.email;
    this.routeSubscription = route.params.subscribe(params => this.ideaId = params['id']);
    this.ideaService.getIdeaById(this.ideaId).subscribe(idea => {this.idea = idea;});
    //this.userService.getById(this.idea.userId).subscribe(user => this.author = user);
    this.likeColor = "#c7ccd6";




    //this.userService.getById(this.idea.userId).subscribe(author => {this.author=author;});



    //this.userId = this.idea.userId;
    // this.userService.getById(this.userId).subscribe(user => {
    //   this.author = user;
    // });

  }

  private setLikedColor() {
    if ( this.likeColor == '#c7ccd6'){ this.likeColor ='#d15e84'}else { this.likeColor ='#c7ccd6'};
  }
}
