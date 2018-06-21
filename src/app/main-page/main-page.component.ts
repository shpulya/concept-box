import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertService, UserService, IdeaService, TagsService} from '../_services';
import {Idea, User, Tags} from '../_models';
import { PagerService } from '../_services/index';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  moduleId: module.id.toString(),
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent implements OnInit {
  email: string;
  ideas: any = [];
  bestIdeas : any =[];
  currentUser: User;
  searchText: string;
  tags: any = [];
  pager: any = {};
  pagedItems: any[];
  private routeSubscription: Subscription;
  tagId: number = 0;

  constructor(
    private router: Router,
    private ideaService: IdeaService,
    private tagsService: TagsService,
    private alertService: AlertService,
    private pagerService: PagerService,
    private route: ActivatedRoute) {
    this.routeSubscription = route.params.subscribe(params => this.tagId = params['tagId']);
    //this.email = (atob(JSON.parse(localStorage.getItem('currentUser')))).split(':')[0];
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.email = this.currentUser.email;
    console.log(this.tagId);

    this.loadAllIdeas();
    this.loadBestIdeas();
    this.loadTags();

  }

  ngOnInit() {

      //this.loadIdeasByTag(this.tagId);


  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.ideas.length, page);

    // get current page of items
    this.pagedItems = this.ideas.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  private loadBestIdeas() {
    this.ideaService.getAllIdeas().subscribe(ideas => {
      this.bestIdeas = ideas;
    });
  }

  private loadAllIdeas() {
    this.ideaService.getAllIdeas().subscribe(ideas => {
      this.ideas = ideas;
      this.setPage(1);
    });
  }

  private loadTags() {
    this.tagsService.getAllTags().subscribe(tags => this.tags = tags);
  }

  private loadAllIdeasByTag(tagId) {
    this.ideaService.getIdeasByTag(tagId).subscribe(ideas => {
      this.ideas = ideas;
      this.setPage(1);

    });
  }

  private loadBestIdeasByTag(tagId) {
    this.ideaService.getIdeasByTag(tagId).subscribe(ideas => {
      this.bestIdeas = ideas;
    });
  }

  }


