import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  validation = /^[A-Z](?=\S+@+#\b[0-9]{4}\b).{11}$/g;
  registrationList = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.pattern(this.validation)]]
      });
      this.getSignUpList();
  }

  get f() { return this.loginForm.controls; }

  getSignUpList() {
    this.auth.getSignUpList().snapshotChanges().subscribe(data => {
        this.registrationList = [];
        data.forEach(item => {
          const person = item.payload.toJSON();
          this.registrationList.push(person);
        });
      });
  }

  onSubmit() {
      this.submitted = true;
      const email = this.loginForm.get('email').value;
      const password = this.loginForm.get('password').value;
      if (this.loginForm.invalid) {
          return;
      } else {
        const d = this.registrationList.filter(ele => ele.password === password && ele.email === email);
        if (d && d.length !== 0) {
            this.router.navigate(['/dashboard']);
        } else {
            alert('Please enter the correct email and password');
        }
      }
  }

}
