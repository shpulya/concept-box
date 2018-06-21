import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User, Idea} from '../_models/index';
import {AlertService, UserService, IdeaService} from '../_services/index';
import {Subscription} from 'rxjs/Subscription';


@Component({
  moduleId: module.id.toString(),
  templateUrl: 'user-profile.component.html'
})

export class UserProfileComponent implements OnInit {
  email: string;
  currentUser: User;
  ideas: any = [];
  userId: number;
  user: any = [];
  private routeSubscription: Subscription;

  constructor(private router: Router, private alertService: AlertService, private userService: UserService, private ideaService: IdeaService,private route: ActivatedRoute) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.routeSubscription = route.params.subscribe(params => this.userId = params['userId']);
    this.userService.getById(this.userId).subscribe(user => {this.user = user});
    //this.ideaService.getIdeasByUserId(this.userId).subscribe( ideas => {this.ideas = ideas; });
  }

  ngOnInit() {
    //   this.LoadUser();
    this.LoadIdeasByUser();

  }

  private LoadIdeasByUser() {
    this.ideaService.getIdeasByUserId(this.userId).subscribe( ideas => {this.ideas = ideas; });
  }

}
