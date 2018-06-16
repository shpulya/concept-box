import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertService, UserService, IdeaService} from '../_services';
import {Idea, User} from '../_models';

@Component({
  moduleId: module.id.toString(),
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent implements OnInit {
  email: string;
  ideas: Idea[] = [];
  currentUser: User;

  constructor(
    private router: Router,
    private ideaService: IdeaService,
    private alertService: AlertService) {
    //this.email = (atob(JSON.parse(localStorage.getItem('currentUser')))).split(':')[0];
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.email = this.currentUser.email;
  }

  ngOnInit() {
    this.loadAllIdeas();
  }

  private loadAllIdeas() {
    this.ideaService.getAllIdeas().subscribe(ideas => {
      this.ideas = ideas;
    });
  }

}
