import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { flatMap } from 'rxjs/operators';
import { LOG_IN_KEYWORD, SIGN_UP_KEYWORD } from 'src/app/shared/app-constants';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/api/auth/auth.service';
import { LoginService } from 'src/app/shared/services/api/login/login.service';
import { UsersService } from 'src/app/shared/services/api/users/users.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  keyWord = '';
  SIGN_UP_KEYWORD = SIGN_UP_KEYWORD;
  LOG_IN_KEYWORD = LOG_IN_KEYWORD;

  currentUser: any;
  submitted = false;
  matchingError = false;
  submitError = false;
  role = '';
  idUser = 0;
  Form: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService,
    private usersService: UsersService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ keyWord }) => {
      this.keyWord = keyWord;
      if (this.keyWord === this.SIGN_UP_KEYWORD) {
        this.Form = new FormGroup({
          id: new FormControl(null),
          lastname: new FormControl('', [Validators.required]),
          firstname: new FormControl('', [Validators.required]),
          mail: new FormControl('', [ Validators.required, Validators.pattern('^[A-Z-a-z0-9._%+-]+@[A-Z-a-z0-9.-]+\\.[A-Z-a-z]{2,4}$') ]),
          password: new FormControl('', [Validators.required]),
          confirmpassword: new FormControl('', [Validators.required]),
          check: new FormControl(false, [Validators.required])
        });
      }
      else if (this.keyWord === this.LOG_IN_KEYWORD) {
        this.Form = new FormGroup({
          id: new FormControl(null),
          mail: new FormControl('', [ Validators.required, Validators.pattern('^[A-Z-a-z0-9._%+-]+@[A-Z-a-z0-9.-]+\\.[A-Z-a-z]{2,4}$') ]),
          password: new FormControl('', [Validators.required]),
        });
      }
    });
  }

  registration(): void {
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
        this.currentUser = data;
        this.idUser = this.currentUser.id;
        this.cookieService.set('kira-bijoux-cookie', 'user', 365);
        this.cookieService.set('kira-bijoux-id', `${this.idUser}`, 365);

        this.router.navigateByUrl('/home', { skipLocationChange: false }).then(() => {
          this.router.navigate(['home']);
          document.location.reload();
        });
      }, err => {
        this.submitError = true;
      }
    );
  }

  connexion(): void {
    this.submitted = true;

    if (this.Form.invalid) {
      return;
    }

    this.loginService.login(this.Form.value).subscribe(
      (data: User | null) => {
        this.currentUser = data;
        this.role = this.currentUser.role.role;
        this.idUser = this.currentUser.id;
        this.router.navigateByUrl('/home', { skipLocationChange: false }).then(() => {
          this.router.navigate(['home']);
          document.location.reload();
        });
      }, () => {
        this.submitError = true;
      }
    );
  }

}
