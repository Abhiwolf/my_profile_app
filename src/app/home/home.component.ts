import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {PeriodicElement, HomeService} from './home-service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HomeService]
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'dob', 'phoneNumber','emailId', 'edit', 'delete'];
  dataSource: PeriodicElement;
  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit() {
      this.homeService.getFriendlist()
        .subscribe(
          (data: PeriodicElement) => { 
            this.dataSource = data;
          } // success path
        );
  };

  redirectToEditProfile(value){
    this.router.navigate(['editProfile', value.position]);
  };

  gotoEditProfile(){
    this.router.navigate(['editProfile']);
  }

  deleteFriendListRow(list){

  }
  

}
