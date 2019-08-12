import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {MaterializecssService} from '../../shared/materializecss.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {

  @ViewChild('sidenav', null) sidenavRef: ElementRef

  ngAfterViewInit() {
    MaterializecssService.initializeSidenav(this.sidenavRef)
  }
}
