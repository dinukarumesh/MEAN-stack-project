import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})


export class Login implements OnInit {
  email: String;
  password: String;

  constructor(
    private authService:AuthService,
    private router:Router,
    
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      email: this.email,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        console.log(data.token);
        this.router.navigate(['/pages/dashboard']);
      }else {
        this.router.navigate(['/login']);
        this.password = '';
      }
    });
  }
}