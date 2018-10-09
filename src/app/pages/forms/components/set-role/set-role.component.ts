import { Component, OnInit } from '@angular/core';
import { UsersDetailsService } from '../../../../services/users-details.service'

@Component({
  selector: 'app-set-role',
  templateUrl: './set-role.component.html',
  styleUrls: ['./set-role.component.scss']
})
export class SetRoleComponent implements OnInit {
  currentRole:string;
  id:string;
  employeeId:string;
  username:string;
  userRole:string;
  User:any;

  constructor(private UsersDetailsService:UsersDetailsService) { }

  ngOnInit() {
    this.UsersDetailsService.getUsersDetails().then((response) => {
      this.User = response;
      console.log(this.User);
    }, (err)=>{
      console.log(err);
    });
         
     var currentUser = JSON.parse(localStorage.getItem('user'));
     this.currentRole = currentUser.userRole;
  }

  setRole(){
    
  }
}
