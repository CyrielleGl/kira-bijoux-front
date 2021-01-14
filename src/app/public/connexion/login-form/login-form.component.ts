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

  Form = new FormGroup({
    id: new FormControl(null),
    mail: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  public connexion(): void {
    this.submitted = true;

    if (this.Form.invalid) {
      return;
    }

    this.authService.connexion(this.Form.value).subscribe((data: string[]) => {
      this.data = data;
      this.cookieService.set('kira-bijoux-cookie', 'user', 365);
      this.router.navigateByUrl('/home');
    });
  }

}
