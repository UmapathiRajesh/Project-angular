import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupService } from '../Services/signup.service';

@Injectable({
  providedIn: 'root'
})
export class LogGuard implements CanActivate {
  
    constructor(private signup:SignupService){}
    canActivate() {
      if(this.signup.isloggedin()){
        return true
      }
        
    else{
      window.alert("You need to login visit this page");
      return false
    }
  }
}
  
  

