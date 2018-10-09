import { Component,OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { GlobalState } from '../../../global.state';
import {ProfileService} from '../../../pages/profile/profile.service';

class Url{
 success:boolean;
 status:string;
 message:string;
 photodata:string;
}

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss'],
  providers:[ProfileService]
})

export class BaPageTop implements OnInit {
  url:Url = {

    success:false,
    status: "",
    message:"",
    photodata:""

    }

    userId:string ;

  public isScrolled: boolean = false;
  public isMenuCollapsed: boolean = false;

  constructor(private _state: GlobalState,
    private authService: AuthService,
    private router: Router, private profileService:ProfileService) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  User={
        userId:''
  }
  
  ngOnInit(){
    // this.profilePic.id = JSON.parse(localStorage.getItem('user'));
    this.userId =JSON.parse(localStorage.getItem('user')).id;

    this.getUserProfilePicture();

      }

  public signOut(){
    this.authService.logout();
    this.router.navigate(['/login']);

  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  getUserProfilePicture(){
    this.User.userId =this.userId ;

          this.profileService.getUserProfilepicture(this.User)

          .then(response=>{

            this.url =response as Url;

          }).catch(err=>{

            console.log(err);

          });

        }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
}
