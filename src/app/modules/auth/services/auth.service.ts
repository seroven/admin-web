import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environment/environment.prod';
import { AuthInterface } from '../interfaces/auth.interface';
import { AuthResponseInterface } from '../interfaces/auth-response.interface';
import { BehaviorSubject, Observable, Subscription, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl = environments.baseUrl;
  private groupName = 'auth';
  
  private userLogged = new BehaviorSubject<AuthResponseInterface|null>(null);
  public userLogged$ = this.userLogged.asObservable();
  
  constructor(private httpClient:HttpClient, private router:Router) { }

  // login(body:AuthInterface) : Observable<AuthResponseInterface> {
  //   const user =  this.httpClient.post<AuthResponseInterface>(`${this.baseUrl}/${this.groupName}/signin`,body);
  //   return user;
  // }

  // setUserLogged(user:AuthResponseInterface):void{
  //   localStorage.setItem('userLogged', JSON.stringify(user));
  // }
  
  // logout():void{
  //   localStorage.removeItem('userLogged'); 
  // }

  // verifyTokenExpiration():boolean|null{
  //   const userInStorage = localStorage.getItem('userLogged');
  //   if (userInStorage){
  //     const user:AuthResponseInterface = JSON.parse(userInStorage);
  //     const tokenPayload = user.token.split('.')[1];
  //     const decodedPayload = atob(tokenPayload);
  //     const payloadObj = JSON.parse(decodedPayload);
  //     return Date.now() > payloadObj.exp * 1000
  //   } else { 
  //     return null;
  //   }

  // }
  
  // rememberSession(rememberSession:boolean){
  //   localStorage.setItem('rememberSession', rememberSession.toString());
  // }

  

}
