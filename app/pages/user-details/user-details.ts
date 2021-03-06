import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';

// Add NavParams to get the navigation parameters
import { NavController, NavParams } from 'ionic-angular';

// Import GithubUsers Provider
import {GithubUsers} from '../../providers/github-users/github-users';

// Import the User model
import {User} from '../../models/user';


/*
  Generated class for the UserDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/user-details/user-details.html'
})

export class UserDetailsPage {
	user: User = new User;
	login: string;
	constructor(public nav: NavController, navParams: NavParams, githubUsers: GithubUsers) {
		// Retrieve the login from the navigation parameters
	    this.login = navParams.get('login');

	    githubUsers.loadDetails(this.login)
			.then( user => this.user = user)

	}	

}
