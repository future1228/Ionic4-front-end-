import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { AppComponent } from '../../app.component';
import { Platform, LoadingController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { ConditionalExpr } from '@angular/compiler';

const USER_DATA = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  BACKEND_DOMAIN: any = 'http://stackooh.com/Stackooh_backend/index.php';
  // BACKEND_DOMAIN: any = 'http://localhost/v1/index.php';
  APIURL: any = this.BACKEND_DOMAIN + '/login';

  authenticationState = new BehaviorSubject(false);
  verifyState = new BehaviorSubject(false);
  activeState = new BehaviorSubject(false);

  constructor(
    private storage: Storage,
    private platform: Platform,
    private loadingCtrl: LoadingController,
    private http: HttpClient,
    private toastController: ToastController
  ) {
    this.platform.ready().then(() => {
      this.checkToken();
    });
    //this.checkVerified();
    //this.checkActive();
  }

  checkToken() {
    this.storage.get(USER_DATA).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    })
  }

  // checkVerified() {
  //   return this.storage.get(USER_DATA).then((res) => {
  //     if (res) {
  //       res = JSON.parse(res);
  //       if (res.user.email_verified_at != null) {
  //         this.verifyState.next(true);
  //       }
  //     }
  //   });
  // }
  // checkActive() {
  //   return this.storage.get(USER_DATA).then((res) => {
  //     res = JSON.parse(res);
  //     if (!res || res.user.active != 1) {
  //       this.activeState.next(false);
  //       let toast = this.toastController.create({
  //         header: 'Error: ',
  //         message: 'You are a inactive user.',
  //         showCloseButton: true,
  //         closeButtonText: 'Close',
  //         position: 'bottom'
  //       });
  //       toast.then(toast => toast.present());
  //       this.storage.remove(USER_DATA);
  //       this.logout();
  //     } else {
  //       this.activeState.next(true);
  //     }
  //   });
  // }

  async register(request) {

    const loading = await this.loadingCtrl.create({
      message: 'Singin up, please wait ...'
    });
    loading.present();

    if (request.password !== request.confirm) {

      let toast = this.toastController.create({
        header: 'Error: ',
        message: 'Passwod and confirm password have to be the same',
        showCloseButton: true,
        closeButtonText: 'Close',
        position: 'bottom'
      });
      toast.then(toast => toast.present());
      loading.dismiss();

    } else {

      return this.http.post(this.APIURL + '/register', request).subscribe(data => {

        this.storage.set(USER_DATA, JSON.stringify(data)).then(res => {
          this.authenticationState.next(true);
          this.checkToken();
          loading.dismiss();
        });
      }, error => {
        let tMessage = error.error['message'];

        if (error.error['error'] == "undefined") {
          tMessage = 'Unable to connecto with the service, please contact with support.';
        }

        if (typeof error.error.errors != "undefined" && error.error.errors.email) {
          tMessage = error.error.errors.email[0];
        }

        let toast = this.toastController.create({
          header: 'Error: ',
          message: tMessage,
          showCloseButton: true,
          closeButtonText: 'Close',
          position: 'bottom'
        });
        toast.then(toast => toast.present());
        loading.dismiss();
      });
    }
  }
  async login(request) {
    const loading = await this.loadingCtrl.create({
      message: 'Login, please wait ...'
    });
    loading.present();
    
    return this.http.post(this.APIURL + '/Check', request).subscribe(data => {
      
      if(data == 1){
        this.storage.set(USER_DATA, JSON.stringify(data)).then(res => {
          this.authenticationState.next(true);
          loading.dismiss();
          this.checkToken();
        });
      }
      else
      {
        let toast = this.toastController.create({
          header: 'Error: ',
          message: 'Invalid Username and Password.',
          showCloseButton: true,
          closeButtonText: 'Close',
          position: 'bottom'
        });
        toast.then(toast => toast.present());
        loading.dismiss();
      }
    }, error => {
      let tMessage = error.error['error'];
      if (error.error['error'] == "undefined") {
        tMessage = 'Unable to connect with the service, please contact with support.';
      }
      if (typeof error.error.errors != "undefined" && error.error.errors.email) {
        tMessage = error.error.errors.email[0];
      }

      let toast = this.toastController.create({
        header: 'Error: ',
        message: tMessage,
        showCloseButton: true,
        closeButtonText: 'Close',
        position: 'bottom'
      });
      toast.then(toast => toast.present());
      loading.dismiss();
    });
  }

  async logout() {
    this.storage.remove(USER_DATA).then(res => {
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
}
