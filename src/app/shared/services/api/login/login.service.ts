import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private usersService: UsersService,
    private authService: AuthService
  ) { }

  login(formData: string[]): Observable<User | null> {
    return this.authService.connexion(formData)
    // tslint:disable-next-line: deprecation
    .pipe(flatMap(() => this.usersService.identity()));
  }
}
