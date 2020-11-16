import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('stickyMenu') menuElement: ElementRef | any;

  sticky: boolean = false;
  elementPosition: any;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }


}
