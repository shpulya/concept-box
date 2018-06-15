import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AlertService} from '../_services';

@Component({
  moduleId: module.id.toString(),
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
  constructor(
    private router: Router,
    // private ideaService: IdeaService,
    private alertService: AlertService) { }
}
