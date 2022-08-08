import { Component, OnInit } from "@angular/core";
import { User } from "../user/User";
import { UserserviceService } from "../userservice.service";


@Component({
selector:'register-comp',
templateUrl:'./user-register.component.html',
styleUrls:['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit{
    user:User=new User(0,"","","");
    users:any;

constructor(private userService:UserserviceService){ }
 ngOnInit(){

}

addUserToDB(){
    let resp=this.userService.addUser(this.user);
    resp.subscribe((data)=>this.users=data);
      }
}