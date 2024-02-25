import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {env} from "../../../enviroments/enviroment";
import {AuthState} from "./authState";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(username:string,password:string):Observable<AuthState>{
    return this.http.post<AuthState>(env.host+"/api/v1/auth/authenticate",{"email": username, "password": password});
  }
  register(username:string,password:string):Observable<AuthState>{
    return this.http.post<AuthState>(env.host+"/api/v1/auth/register",{"email": username, "password": password});

  }
}
