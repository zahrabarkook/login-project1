import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

 loggedIn:boolean=false;
  localStorage: any;
 
//  public isauthenticated(){
//   return new Promise ((resolve , rejects)=>{
//    resolve(this); 
//   })
//  }
  

getUserLoggedIn() {
  return this.localStorage.getItem('EmailAddress');
  // return this.isUserLoggedIn;
}

}
