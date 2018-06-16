import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';
import {User} from '../_models';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) {

  }

  login(email: string, password: string) {

    let headers = new HttpHeaders()
      .set('Authorization', 'Basic ' + btoa(email + ':' + password))
      .set('Content-Type', 'application/json');
    console.log(btoa(email + ':' + password));
    return this.http.get(environment.apiUrl + '/api/v1/getUserByEmail/' + email, {headers: headers})
      .map(res => {
        // login successful if there's a jwt token in the response
        if (res) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          console.log('good');
          console.log(res);

          //user.password = btoa(email + ':' + password);
          localStorage.setItem('currentUser', JSON.stringify(res));
          localStorage.setItem('authHeader', JSON.stringify(btoa(email + ':' + password)));
          return true;
        }
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
