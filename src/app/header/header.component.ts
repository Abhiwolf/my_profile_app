import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() visibilityOfHeader = new EventEmitter<boolean>();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogout(){
    this.visibilityOfHeader.emit(false);
    localStorage.removeItem("isLoggedin");
    this.router.navigate(['login']);
  }

}
