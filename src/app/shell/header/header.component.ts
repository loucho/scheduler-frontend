import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService, CredentialsService } from '@app/auth';
import { MenuItem } from './models/MenuItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  public menu: Array<MenuItem> = [];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService
  ) {
    this.menu = [
      new MenuItem('Dashboard', '/', 'fa-home'),
      new MenuItem('Groups', '/groups', 'fa-users'),
      new MenuItem('Friends', '/friends', 'fa-user-friends'),
      new MenuItem('Schedule', '/schedule', 'fa-calendar-alt'),
    ];
  }

  ngOnInit() {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }
}
