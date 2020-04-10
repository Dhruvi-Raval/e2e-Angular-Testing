import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  public editEmployeeForm: FormGroup;
  public submitted = false;
  // tslint:disable-next-line:no-output-native
  @Output() close = new EventEmitter();
  // Open status
  @Input() open;
  @Input() editDetails;

  constructor( private formBuilder: FormBuilder, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    console.log('data', this.editDetails);
    if (this.editDetails) {
      this.editEmployeeForm = this.formBuilder.group({
        name: [this.editDetails.name, [Validators.required]],
        position: [this.editDetails.position, [Validators.required]],
        experience: [this.editDetails.experience, [Validators.required]],
        company: [this.editDetails.company, [Validators.required]]
      });
    }
  }

  get f() { return this.editEmployeeForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.editEmployeeForm.invalid) {
      return;
    } else {
      this.employeeService.updateEmployee(this.editEmployeeForm.value, this.editDetails.key);
      this.close.emit(false);
    }
  }

  onCancel() {
    this.close.emit(false);
  }

}
