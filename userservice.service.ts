import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { User } from './user/User';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  constructor(private http:HttpClient) { }

/*  private baseUrl="http://localhost:8094/getAllUsers";

  

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`);
  }  */

   public getUsers(){
    return this.http.get("http://localhost:8094/getAllUsers");
  }
  public deleteUserbyId(id){
   return this.http.delete("http://localhost:8094/deleteUser/"+id);
  } 
  public getUserById(id){
    return this.http.get("http://localhost:8094/getUser/"+id);
  }
  public addUser(user){
    return this.http.post("http://localhost:8094/addUser",user,{responseType:'text' as 'json'});
  }
}
