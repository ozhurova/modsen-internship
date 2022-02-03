import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IAuthUser } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  @Output() loginEmitter: EventEmitter<IAuthUser> = new EventEmitter<IAuthUser>();

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  login(): void {
    const authUser: IAuthUser = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    if (this.loginForm.valid) {
      this.loginEmitter.emit(authUser);
    }
  }

  cancel(): void {
    this.loginForm.reset();
  }
}
