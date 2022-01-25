import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import { AuthUser } from '../../interfaces/auth-interface'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  public email = new FormControl('', [Validators.required, Validators.email]);
  public password = new FormControl('', [Validators.required]);

  submit(){
      const user: AuthUser = {
        username: this.email.value,
        password: this.password.value
      };
    console.log(user)
  }
}
