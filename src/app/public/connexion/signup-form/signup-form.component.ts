import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/api/auth/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {
  constructor(private authService: AuthService) {}

  public data: any;
  public submitted: boolean = false;

  Form = new FormGroup({
    id: new FormControl(null),
    lastname: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmpassword: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  public registration(): void {
    this.submitted = true;

    if (this.Form.invalid) {
      return;
    }

    console.log(this.Form.value);

    this.authService.registration(this.Form.value).subscribe((data: string[]) => {
      this.data = data;
    });
  }
}
