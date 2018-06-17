import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User, Idea} from '../_models/index';
import {AlertService, UserService, IdeaService} from '../_services/index';

@Component({
  moduleId: module.id.toString(),
  templateUrl: 'user-profile.component.html'
})

export class UserProfileComponent implements OnInit {
  email: string;
  currentUser: User;
  ideas: Idea[] = [];


  constructor(private router: Router, private alertService: AlertService, private userService: UserService, private ideaService: IdeaService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    //   this.LoadUser();
    this.LoadIdeasByUser();

  }

  private LoadIdeasByUser() {
    this.ideaService.getIdeasByUserId(this.currentUser.id).subscribe( ideas => {this.ideas = ideas; });
  }

}
