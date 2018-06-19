import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertService, UserService, IdeaService, TagsService} from '../_services';
import {Idea, User, Tags} from '../_models';
import { PagerService } from '../_services/index'

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

  constructor(
    private router: Router,
    private ideaService: IdeaService,
    private tagsService: TagsService,
    private alertService: AlertService,
    private pagerService: PagerService) {
    //this.email = (atob(JSON.parse(localStorage.getItem('currentUser')))).split(':')[0];
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.email = this.currentUser.email;
  }

  ngOnInit() {
    this.loadAllIdeas();
    this.loadBestIdeas();
    this.loadTags();
    
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

  private loadIdeasByTag(tagName){

  }
  private searchIdeaByHeader() {
    //searchText = searchText.toLowerCase();
    if (this.searchText != null ) {
      this.ideaService.getIdeasByHeader(this.searchText).subscribe( ideas => this.ideas = ideas);
    }
    else {
      this.loadAllIdeas();
    }
  }

}
