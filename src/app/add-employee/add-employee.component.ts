import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  public addEmployeeForm: FormGroup;
  public submitted = false;
  // tslint:disable-next-line:no-output-native
  @Output() close = new EventEmitter();

   // Open status
   @Input() open;

  constructor( private formBuilder: FormBuilder, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.addEmployeeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      position: ['', [Validators.required]],
      experience: ['', [Validators.required]],
      company: ['', [Validators.required]]
    });
  }

  get f() { return this.addEmployeeForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.addEmployeeForm.invalid) {
      return;
    } else {
      this.employeeService.addemployee(this.addEmployeeForm.value);
      this.close.emit(false);
    }
  }

  onCancel() {
    this.close.emit(false);
  }
}
