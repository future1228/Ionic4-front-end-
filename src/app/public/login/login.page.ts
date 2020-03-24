import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { Login } from './login.model';
//import { LoginService } from './login.service';
//import {Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit() {
  }

  onLogin(loginData) {
    this.authService.login(loginData.value);
  }
}
