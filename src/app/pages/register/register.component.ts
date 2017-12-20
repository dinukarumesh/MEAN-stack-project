import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';

@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class Register {

  public employeeId: string;
  public username:string;
  public email:string;
  public password:string;
  public userRole:string;
 

  constructor(
    private authService: AuthService,
    private validateService: ValidateService, 
    private router: Router) { }

    onRegisterSubmit(){
      const user = {
        employeeId: this.employeeId,
        username: this.username,
        email: this.email,
        password: this.password,
        userRole: "employee"
  
      }
  
      // Required Fields
      if(!this.validateService.validateRegister(user)){
        this.password = "";
        return false;
      }
  
      // Required Fields
      if(!this.validateService.validateEmail(user.email)){
        this.email = "";
        this.password = "";
        return false;
      }
  
      // Register user
      this.authService.registerUser(user).subscribe(data => {
        if(data.success){
          this.router.navigate(['/login']);
        } else {
          this.router.navigate(['/register']);
        }
      });
    }
  
  }
  