import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Idea } from '../_models/index';

@Injectable()
export class IdeaService {
  constructor(private http: HttpClient) { }

  getAllIdeas() {
    return this.http.get<Idea[]>(environment.apiUrl+'/api/v1/ideas');
  }

  getIdeaById(id: number) {
    return this.http.get(environment.apiUrl+'/api/v1/idea/' + id);
  }

  getIdeasByUserId(userId: number) {
    return this.http.get( environment.apiUrl+'/api/v1/getIdeasByUserId/' + userId);
  }

  createIdea(idea: Idea) {
    return this.http.post(environment.apiUrl+'/api/v1/idea', idea);
  }

  update(id:number, idea: Idea) {
    return this.http.put(environment.apiUrl+'/api/v1/idea/' + idea.id, idea);
  }

  delete(id: number) {
    return this.http.delete(environment.apiUrl+'/api/v1/idea/' + id);
  }
}
