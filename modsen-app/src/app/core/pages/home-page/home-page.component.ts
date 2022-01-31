import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IAuthUser } from '../../models/user.model';
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
        const user: IAuthUser = {
            username: this.email.value,
            password: this.password.value
        };
        console.log(user);
        void this.router.navigate(['choose-tests']);
    }
}
