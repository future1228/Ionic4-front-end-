import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
   {
      title: 'Dashboard',
      path: '/menu/page/dashboard',
      icon: 'dashboard'
   },
   {
    title: 'Settings',
    path: '/menu/page/settings',
    icon: 'settings'
   }
  ];

  selectedPath = '';

  constructor(private router: Router,private authService: AuthenticationService) { 
    
  } 

  ngOnInit() {
    this.router.events.subscribe((event:RouterEvent) => {
      this.selectedPath = event.url
    })
  }
  logOut(){
    this.authService.logout();
  }

}
