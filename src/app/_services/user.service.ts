﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(environment.apiUrl+'/api/v1/users');
    }

    getById(id: number) {
        return this.http.get(environment.apiUrl+'/api/v1/user/' + id);
    }

    create(user: User) {
        //user = {id: 11, name: "Test", country: "ua", role: "ROLE_USER", password: "123"};
        return this.http.post(environment.apiUrl+'/api/v1/user', user);
    }

    update(user: User) {
        return this.http.put(environment.apiUrl+'/api/v1/user/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(environment.apiUrl+'/api/v1/user/' + id);
    }
}
