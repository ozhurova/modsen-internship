import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, Validators } from '@angular/forms';

import { IAuthUser } from '../../models/user.model';
import { UserApiService } from '../../services/userApi.service';
import { UIService } from '../../services/ui.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

    constructor(
        private router: Router,
        private userApiService: UserApiService,
        private uiService: UIService
    ) {
    }

    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required]);

    submit(): void {
        const user: IAuthUser = {
            email: this.email.value,
            password: this.password.value
        };

        this.uiService.login(user);
        this.router.navigate(['choose-tests']);
    }
}
