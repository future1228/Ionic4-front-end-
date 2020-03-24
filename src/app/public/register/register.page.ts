import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  isAgreed: boolean = false;
  private regData = {};

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }
  register(signupData) {
    Object.assign(this.regData, signupData.value);
    this.authService.register(this.regData);
  }
}
