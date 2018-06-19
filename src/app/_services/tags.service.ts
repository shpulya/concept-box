import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Tags } from '../_models/index';

@Injectable()
export class TagsService {
  constructor(private http: HttpClient) { }

  getAllTags() {
    return this.http.get<Tags[]>(environment.apiUrl+'/api/v1/tags');
  }

  getTagById(id: number) {
    return this.http.get(environment.apiUrl+'/api/v1//tag/' + id);
  }

  getTagsByIdeaId(ideaId: number){
    return this.http.get(environment.apiUrl+'/api/v1/getTagsByIdeaId/'+ideaId);
  }


}
