import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../shared/services/api/users/users.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  constructor(private usersService: UsersService, private titleService: Title) {
    this.titleService.setTitle("Mon Compte");
  }

  public data: any;
  public submitted: boolean = false;
  public EventValue: string = "Enregistrer";

  Form = new FormGroup({
    id: new FormControl(null),
    lastname: new FormControl("", [Validators.required]),
    firstname: new FormControl("", [Validators.required]),
    mail: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  ngOnInit(): void {
    this.getAllUsers();
  }

  public getAllUsers(): void {
    this.usersService.getAllUsers().subscribe((data: string[]) => {
      this.data = data;
    });
  }

  public deleteData(id: number): void {
    this.usersService.deleteUser(id).subscribe((data: string[]) => {
      this.data = data;
      this.getAllUsers();
    });
  }
  public Enregistrer(): void {
    this.submitted = true;

    if (this.Form.invalid) {
      return;
    }
    this.usersService.postUser(this.Form.value).subscribe((data: string[]) => {
      this.data = data;
      this.resetFrom();
    });
  }

  public Update(): void {
    this.submitted = true;

    if (this.Form.invalid) {
      return;
    }
    this.usersService
      .putUser(this.Form.value.id, this.Form.value)
      .subscribe((data: string[]) => {
        this.data = data;
        this.resetFrom();
      });
  }

  public EditData(Data: any): void {
    this.Form.controls.id.setValue(Data.id);
    this.Form.controls.lastname.setValue(Data.lastname);
    this.Form.controls.firstname.setValue(Data.firstname);
    this.Form.controls.mail.setValue(Data.mail);
    this.Form.controls.password.setValue(Data.password);
    this.EventValue = "Update";
  }

  public resetFrom(): void {
    this.getAllUsers();
    this.Form.reset();
    this.EventValue = "Enregistrer";
    this.submitted = false;
  }

  public onSubmit(): void {
    if (this.EventValue == "Enregistrer") {
      this.Enregistrer();
    } else if (this.EventValue == "Update") {
      this.Update();
    }
  }
}
