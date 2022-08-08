import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { User } from './User';


@Component({
  selector: 'app-user1',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 //users:User[];
 users:any;
 
  constructor(private userService:UserserviceService) { }

  public deleteUser(id:number){
    let resp=this.userService.deleteUserbyId(id);
    resp.subscribe((data)=>this.users=data);
  }
  ngOnInit():void {
 this.userService.getUsers().subscribe((data:User[])=>{
   console.log(data);
   this.users=data;
 })
  }

  findUserById(id:number){
    let resp=this.userService.getUserById(id);
    resp.subscribe((data)=>this.users=data);
  }


}
