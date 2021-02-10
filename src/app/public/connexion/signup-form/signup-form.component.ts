import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../../shared/services/api/auth/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, private cookieService: CookieService) {}

  public data: any;
  public submitted = false;
  public matchingError = false;
  public submitError = false;
  public id_user: number = 0;

  Form = new FormGroup({
    id: new FormControl(null),
    lastname: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    mail: new FormControl('', [ Validators.required, Validators.pattern('^[A-Z-a-z0-9._%+-]+@[A-Z-a-z0-9.-]+\\.[A-Z-a-z]{2,4}$') ]),
    password: new FormControl('', [Validators.required]),
    confirmpassword: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  public registration(): void {
    this.submitted = true;

    if (this.Form.invalid) {
      return;
    }

    if (this.Form.value.password !== this.Form.value.confirmpassword) {
      this.matchingError = true;
      return;
    }

    this.matchingError = false;

    const formData = {
      lastname: this.Form.value.lastname,
      firstname: this.Form.value.firstname,
      mail: this.Form.value.mail,
      password: this.Form.value.password,
    };

    this.authService.registration(formData).subscribe(
      (data: any[]) => {
        this.data = data;
        this.id_user = this.data.id;
        this.cookieService.set('kira-bijoux-cookie', 'user', 365);
        this.cookieService.set('kira-bijoux-id', `${this.id_user}`, 365);
        this.router.navigateByUrl('/home', { skipLocationChange: false }).then(() => {
          this.router.navigate(['home']);
          document.location.reload();
        });
      }, err => {
        this.submitError = true;
      }
    );
  }
}
