import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/api/auth/auth.service';
import { LoginService } from 'src/app/shared/services/api/login/login.service';

@Component({
  selector: 'app-alert-stock-modal',
  templateUrl: './alert-stock-modal.component.html',
  styleUrls: ['./alert-stock-modal.component.scss']
})
export class AlertStockModalComponent implements OnInit {
  item: any;
  data: any;
  submitted = false;
  submitError = false;
  role = '';
  idUser = 0;

  Form = new FormGroup({
    id: new FormControl(null),
    mail: new FormControl('', [ Validators.required, Validators.pattern('^[A-Z-a-z0-9._%+-]+@[A-Z-a-z0-9.-]+\\.[A-Z-a-z]{2,4}$') ]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    public activeModal: NgbActiveModal,
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }

  redirectToSignUp(): void {
    this.router.navigateByUrl('/inscription').then();
    this.cancel();
  }

  connexion(): void {
    this.submitted = true;

    if (this.Form.invalid) {
      return;
    }

    this.loginService.login(this.Form.value).subscribe(
      (data: User | null) => {
        this.data = data;
        this.role = this.data.role.role;
        this.idUser = this.data.id;
        this.router.navigateByUrl('/home', { skipLocationChange: false }).then(() => {
          this.router.navigate(['home']);
          document.location.reload();
        });
      }, err => {
        this.submitError = true;
      }
    );
    // this.addAlertUser();
  }

  // TODO: addAlertUser(): void {}

  cancel(): void {
    this.activeModal.close();
  }

}
