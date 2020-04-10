import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private db: AngularFireDatabase) { }

  addemployee(data) {
    this.db.list('/addEmployee/').push(data);
  }

  getEmployeeDetail() {
    return this.db.list('/addEmployee/');
  }

  deleteEmployee(key: string) {
    return this.db.object('/addEmployee/' + key).remove();
  }

  updateEmployee(data, key) {
    this.db.object('/addEmployee/' + key).update(data);
  }
}
