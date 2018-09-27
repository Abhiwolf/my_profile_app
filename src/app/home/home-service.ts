import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  position: number;
  firstName: string;
  lastName: string;
  dob: string;
  phoneNumber: string;
  emailId: string

}

@Injectable()
export class HomeService {

  configUrl = 'assets/friendlist.json';
  constructor(private http: HttpClient) { }

  getFriendlist() {
    return this.http.get<PeriodicElement>(this.configUrl);
  }

  deleteFriendlistRow(value){
    
  }
}