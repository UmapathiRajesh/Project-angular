import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  isloggedin(){ 
    const regEmail=localStorage.getItem('remail')
    const regPass=localStorage.getItem('rpass')
    const lEmail=localStorage.getItem('email')
    const lPass=localStorage.getItem('pass')
    if(regEmail===null){
      window.alert('kindly login to view this page')
      return false
    }
else if( regEmail=== lEmail && regPass === lPass){
  console.log(regEmail);
  console.log(lEmail);
  console.log(regPass);
  console.log(lPass);
  window.alert('login successful')
  return true
}else {
  window.alert('login failed please  verify your email or password')
return false 
}  
  }

  constructor() { }
}
