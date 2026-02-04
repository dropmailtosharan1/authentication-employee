import { Component, ViewEncapsulation, ViewRef } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
   standalone: true,
  imports: [RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(public auth: AuthService, private router: Router) {}

  goTo(path: string) { this.router.navigate([path]); }
  goHome() { if (this.auth.isLoggedIn()) this.router.navigate(['/home']); else this.router.navigate(['/login']); }
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
