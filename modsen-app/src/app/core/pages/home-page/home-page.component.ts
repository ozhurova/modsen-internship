import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthUser } from '../../models/interfaces/auth-interface';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
    constructor(private router: Router) {
    }

    public email = new FormControl('', [Validators.required, Validators.email]);
    public password = new FormControl('', [Validators.required]);

    submit(): void {
        const user: AuthUser = {
            username: this.email.value,
            password: this.password.value
        };
        console.log(user);
        void this.router.navigate(['choose-tests']);
    }
}
