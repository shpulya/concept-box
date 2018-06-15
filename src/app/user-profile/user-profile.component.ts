import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../_models/index';
import { AlertService, UserService } from '../_services/index';

@Component({
  moduleId: module.id.toString(),
  templateUrl: 'user-profile.component.html'
})

export class UserProfileComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private router: Router,private alertService: AlertService,private userService: UserService) {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {

  }


}
