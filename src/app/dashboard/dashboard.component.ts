import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public isAddModalOpen = false;
  public isEditModalOpen = false;
  public employeeList = [];
  public editEmployeeDetail = {};

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeDetail();
  }

  getEmployeeDetail() {
    this.employeeService.getEmployeeDetail().snapshotChanges().subscribe(data => {
        this.employeeList = [];
        data.forEach(item => {
          const person = item.payload.toJSON();
          // tslint:disable-next-line:no-string-literal
          person['key'] = item.key;
          this.employeeList.push(person);
        });
      });
  }

  closeModal($event) {
   this.isAddModalOpen = $event;
   this.isEditModalOpen = $event;
  }

  editDetail(data) {
    this.isEditModalOpen = true;
    this.isAddModalOpen = false;
    this.editEmployeeDetail = data;
  }

  deleteEmployee(key: string) {
    this.employeeService.deleteEmployee(key);
  }
}
