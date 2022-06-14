import { Component, OnInit } from '@angular/core';
import { NavElement } from 'src/app/shared/interfaces/nav-element.interface';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'awi-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navElements: NavElement[] = []
  constructor(private navService: NavigationService) { }

  ngOnInit(): void {
    this.navElements = this.navService.getNavElements();
  }

}
