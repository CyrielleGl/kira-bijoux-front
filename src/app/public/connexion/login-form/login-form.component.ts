import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/api/auth/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private cookieService: CookieService) { }

  public data: any;
  public submitted = false;
  public submitError = false;
  public role: string = '';
  public id_user: number = 0;

  Form = new FormGroup({
    id: new FormControl(null),
    mail: new FormControl('', [ Validators.required, Validators.pattern('^[A-Z-a-z0-9._%+-]+@[A-Z-a-z0-9.-]+\\.[A-Z-a-z]{2,4}$') ]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  public connexion(): void {
    this.submitted = true;

    if (this.Form.invalid) {
      return;
    }

    this.authService.connexion(this.Form.value).subscribe(
      (data: string[]) => {
        this.data = data;
        this.role = this.data.role.role;
        this.id_user = this.data.id;
        if (this.role == 'user') {
          this.cookieService.set('kira-bijoux-cookie', 'user', 365);
        } else if(this.role == 'admin') {
          this.cookieService.set('kira-bijoux-cookie', 'admin', 365);
        }
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
