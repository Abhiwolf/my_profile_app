import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeriodicElement,HomeService } from '../home/home-service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers:[HomeService]
})
export class EditProfileComponent implements OnInit {
  id: number;
  private sub: any;
  singleUserData:PeriodicElement;
  constructor(private route: ActivatedRoute, private homeService: HomeService) { }

  private editProfileObject = {
    firstName:"",
    lastName:'',
    emailId:'',
    dob:'',
    phoneNumber:''
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      this.homeService.getFriendlist()
      .subscribe((data:any)=>{
          this.singleUserData = data.find((element) => {
            return (element.position === this.id)
          });
          if(this.singleUserData){
            this.editProfileObject.firstName = this.singleUserData.firstName;
            this.editProfileObject.lastName = this.singleUserData.lastName;
            this.editProfileObject.emailId = this.singleUserData.emailId;
            this.editProfileObject.dob = this.singleUserData.dob;
            this.editProfileObject.phoneNumber = this.singleUserData.phoneNumber;
          }
      })
   });
  }

  updateOrCreate(formElement:NgForm){
    console.log(formElement.value);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
