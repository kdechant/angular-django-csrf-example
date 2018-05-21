import {Component} from '@angular/core';
import {SpaceshipService} from './spaceship.service';
import {UserService} from './user.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * An object representing the user for the login form
   */
  public user: any;

  /**
   * The JWT token (for user auth)
   */
  public jwt_token: string;

  /**
   * An array of all the Spaceship objects from the API
   */
  public spaceships;

  /**
   * An object representing the data in the "add" form
   */
  public new_ship: any;

  constructor(private _spaceshipService: SpaceshipService, private _userService: UserService) { }

  ngOnInit() {
    this.getSpaceships();
    this.new_ship = {};
    this.user = {
      username: '',
      password: '',
      errors: ['errors go here'],
      token: ''
    }
  }

  login() {
    this._userService.login({'username': this.user.username, 'password': this.user.password}).subscribe(
      data => { console.log('login success', data); this.user.token = data['token']; },
      err => { console.error('login error', err); this.user.errors = err['error']['non_field_errors']; }
    );
  }

  getSpaceships() {
    this._spaceshipService.list().subscribe(
      // the first argument is a function which runs on success
      data => { this.spaceships = data; console.log(this.spaceships)},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading spaceships')
    );
  }

  createShip() {
    this._spaceshipService.create(this.new_ship).subscribe(
       data => {
         // refresh the list
         this.getSpaceships();
         return true;
       },
       error => {
         console.error("Error saving!");
         return Observable.throw(error);
       }
    );
  }

  updateShip(ship) {
    this._spaceshipService.update(ship).subscribe(
       data => {
         // refresh the list
         this.getSpaceships();
         return true;
       },
       error => {
         console.error("Error saving!");
         return Observable.throw(error);
       }
    );
  }

  deleteShip(ship) {
    if (confirm("Are you sure you want to delete " + ship.name + "?")) {
      this._spaceshipService.delete(ship).subscribe(
         data => {
           // refresh the list
           this.getSpaceships();
           return true;
         },
         error => {
           console.error("Error deleting!");
           return Observable.throw(error);
         }
      );
    }
  }
}
