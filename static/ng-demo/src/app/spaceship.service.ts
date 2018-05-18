import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class SpaceshipService {

    // http options used for making any writing API calls
    private httpOptions: any;

    constructor(private http:HttpClient, private _cookieService:CookieService) {
        // CSRF token is needed to make API calls work when logged in
        let csrf = this._cookieService.get("csrftoken");
        // the Angular HttpHeaders class throws an exception if any of the values are undefined
        if (typeof(csrf) === 'undefined') {
          csrf = '';
        }
        this.httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-CSRFToken': csrf })
        };
    }

    // NOTE: all API calls in this file use simple endpoints served by
    // an Express app in the file app.js in the repo root. See that file
    // for all back-end code.

    // Uses http.get() to load data from a single API endpoint
    list() {
        return this.http.get('/api/spaceships');
    }

    // send a POST request to the API to create a new data object
    create(ship) {
        let body = JSON.stringify(ship);
        return this.http.post('/api/spaceships', body, this.httpOptions);
    }

    // send a PUT request to the API to update a data object
    update(ship) {
        let body = JSON.stringify(ship);
        return this.http.put('/api/spaceships/' + ship.id, body, this.httpOptions);
    }

    // send a DELETE request to the API to delete a data object
    delete(ship) {
        return this.http.delete('/api/spaceships/' + ship.id, this.httpOptions);
    }

}
