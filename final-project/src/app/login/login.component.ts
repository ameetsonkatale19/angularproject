import { Component, OnInit} from '@angular/core';
import { AuthService } from '../servies/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(private auth: AuthService, private router:Router){}
  passwordVisible:boolean = false;
  username="";
  password="";
  errormsg ="";
  login(){
    if(this.username.trim().length === 0 ){
      this.errormsg ="username is required";
    }
    else if(this.password.trim().length === 0){
      this.errormsg="password is required";
    }else{
      this.errormsg="";
      let passwordInput = document.getElementById('password') as HTMLInputElement;
      let res = this.auth.login(this.username, this.password);
      if(res===200){
        this.router.navigate(['home']);
      }
      if(res===403){
        this.errormsg = 'Invalid Credentials';
      }
    }
  }

  togglePassword(){
   this.passwordVisible=! this.passwordVisible
  }

}
