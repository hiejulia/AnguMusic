import { Component } from '@angular/core';



declare var Auth0Lock;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lock= new Auth0Lock('client_id','auth0_domain');
  constructor(){}
  title = 'app works!';
  //login

  login(){
    var hash =this.lock.parseHash();
    if(hash){
      if(hash.error){
        console.error(`There was an error loggin in ${hash.error}`);
      }
      else {
        this.lock.getProfile(hash.id_token,function(err, profile){
            if(err){
                console.error(err);
                return;
            }
            //else
            localStorage.setItem('profile',JSON.stringify(profile));
            localStorage.setItem('id_token',hash.id_token);
        });
      }
    }
  }
  //logout
  logout() {
    localStorage.removeItem('profile');

    localStorage.removeItem('id_token');
  }

  loggedIn(){
    return tokenNotExpired();  }



}
