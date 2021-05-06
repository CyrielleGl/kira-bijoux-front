import { Component, ElementRef, HostListener, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild('stickyMenu') menuElement: ElementRef | any;

  sticky = false;
  elementPosition: any;
  private roleAccess = '';
  roleUser = false;
  roleAdmin = false;
  roleNotLogged = false;

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.roleAccess = this.cookieService.get('kira-bijoux-cookie');
    this.displayByAccessRole(this.roleAccess);
  }

  ngAfterViewInit(): any {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  private displayByAccessRole(roleAccess: string): void {
    if (this.roleAccess === 'user') {
      this.roleUser = true;
    } else if (this.roleAccess === 'admin') {
      this.roleAdmin = true;
    } else if (this.roleAccess === '') {
      this.roleNotLogged = true;
    }
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(): void {
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }

  logout(): void {
    this.cookieService.delete('kira-bijoux-cookie');
    this.cookieService.delete('kira-bijoux-id');
    this.router.navigateByUrl('/home', { skipLocationChange: false }).then(() => {
      this.router.navigate(['home']);
      document.location.reload();
    });
  }

}
