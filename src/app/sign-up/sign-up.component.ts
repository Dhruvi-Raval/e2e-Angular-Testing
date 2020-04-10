import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordMatch } from './password-match.validators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  validation = /^[A-Z](?=\S+@+#\b[0-9]{4}\b).{11}$/g;

  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.pattern(this.validation)]],
          confirmPassword: ['', Validators.required]
      }, {
        validator: PasswordMatch('password', 'confirmPassword')
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
          return;
      } else {
          this.auth.registrationAdd(this.registerForm.value);
          this.router.navigate(['/home']);
      }
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}
