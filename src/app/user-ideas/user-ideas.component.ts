import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User, Idea} from '../_models/index';
import {UserService, IdeaService} from '../_services/index';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';


@Component({
  moduleId: module.id.toString(),
  templateUrl: 'user-ideas.component.html'

})

export class UserIdeasComponent implements OnInit {
  users: User[];
  ideas: any =[];
  currentUser: User;
  private routeSubscription: Subscription;
  userId: number;


  constructor(private userService: UserService,
              private ideaService: IdeaService,
              private route: ActivatedRoute) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.routeSubscription = route.params.subscribe(params => this.userId = params['userId']);
  }

  ngOnInit() {
    this.loadAllIdeas();
  }

  updateIdea(id: number, idea: Idea) {
    this.ideaService.update(id,idea).subscribe(() => {
      this.loadAllIdeas();
    });
  }

  deleteIdea(id:number){
    this.ideaService.delete(id).subscribe(() => this.loadAllIdeas());
  }

  private loadAllIdeas() {
    this.ideaService.getIdeasByUserId(this.userId).subscribe(ideas => {
      this.ideas = ideas;
    });
  }
}
