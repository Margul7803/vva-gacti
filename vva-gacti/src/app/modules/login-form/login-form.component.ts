import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/models/compte';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage!: string;
  constructor(private formBuilder: FormBuilder) {}

  @Input()
  error!: string | null;

  @Output()
  login = new EventEmitter<Login>();

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required],
      },
      {
        updateOn: 'change',
      }
    );
    this.errorMessage = 'Le champ est <strong>requis</strong>';
  }

  getErrorMessage() {
    if (this.loginForm.get('username')?.hasError('required')) {
      return (this.errorMessage = 'Le champ est <strong>requis</strong>');
    }
    return (this.errorMessage = "Nom d'utilisateur <strong>invalid</strong>");
  }

  submit() {
    if (this.loginForm.valid) {
      this.login.emit(this.loginForm.value);
    }
  }
}
