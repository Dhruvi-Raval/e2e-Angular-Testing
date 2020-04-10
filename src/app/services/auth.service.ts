import { Injectable } from '@angular/core';
import { AngularFireDatabase,  } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public db: AngularFireDatabase) { }

  registrationAdd(data) {
    this.db.list('/registration').push(data);
  }

  getSignUpList() {
    return this.db.list('/registration');
  }
}
