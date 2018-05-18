import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SpaceshipService {

    constructor(private http:HttpClient) {
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
        return this.http.post('/api/spaceships', body, httpOptions);
    }

    // send a PUT request to the API to update a data object
    update(ship) {
        let body = JSON.stringify(ship);
        return this.http.put('/api/spaceships/' + ship.id, body, httpOptions);
    }

    // send a DELETE request to the API to delete a data object
    delete(ship) {
        return this.http.delete('/api/spaceships/' + ship.id);
    }

}
