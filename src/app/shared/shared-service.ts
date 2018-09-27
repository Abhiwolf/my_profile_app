import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

@Injectable()
export class SharedService{
    token:string = '';
    emitLoginSuccess = new Subject<boolean>();
    isLogginStateChange:boolean = false;
    constructor(){}
    
    checkLoginSuccess(email:string, password:string){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                firebase.auth().currentUser.getIdToken()
                .then((token:string) => {
                    this.token = token;
                    this.isLogginStateChange = true;
                    this.emitLoginSuccess.next(this.isLogginStateChange)
                    }
                )
            }
        )
        .catch(
            error => console.log(error)
        )
    }

    getToken(){
         firebase.auth().currentUser.getIdToken()
         .then(
            (token:string) => this.token = token
        )
        return this.token;
    }

    isAuthenticate(){
        return this.token != null;
    }


}