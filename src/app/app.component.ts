import { Component,OnInit} from '@angular/core';
import {Router, ActivatedRoute, Event} from "@angular/router";
import { Subscription } from 'rxjs';
import {SharedService} from "./shared/shared-service";

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Profile App';
  subscription: Subscription;
  validationCheckLogin:boolean = false;
  convertString:string;
  
  constructor(private shareService: SharedService, private router: Router, private activatedRoute : ActivatedRoute){
    this.subscription = this.shareService.emitLoginSuccess.subscribe((value)=>{
      this.validationCheckLogin = value;
      this.convertString = value.toString();
      localStorage.setItem('isLoggedin', this.convertString);
    })
  
  }

  ngOnInit(){

    firebase.initializeApp({
      apiKey: "AIzaSyDXpN7FLYVD2XheG1v96a0fVva1dSVVoRs",
      authDomain: "my-profie-app.firebaseapp.com"
    })


    let isSessionvalue = JSON.parse(localStorage.getItem("isLoggedin"));
    if(isSessionvalue){
      this.validationCheckLogin = isSessionvalue;
    }else{
      this.validationCheckLogin = false;
      localStorage.removeItem("isLoggedin");
      this.router.navigate(['login']);
    }
  }

  showOrHideHeader(value){
    this.validationCheckLogin = false;
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }


  
}
