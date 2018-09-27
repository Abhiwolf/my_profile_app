import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { SharedService } from '../shared/shared-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor(private router: Router, private shareService: SharedService) { }

  ngOnInit() {
    this.subscription = this.shareService.emitLoginSuccess.subscribe(
      (value: boolean) => {
        if (value) {
          this.router.navigate(['home']);
        } else {
          alert("Invalid credentials.")
        }
      }
    );
  }

  login(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.shareService.checkLoginSuccess(email, password);

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
