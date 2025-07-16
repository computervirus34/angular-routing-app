import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {

  constructor(private authService: AuthService) { }

  autoLogoutCheck() {
    const exp = this.authService.getTokenExpiration();
    if (!exp) return;

    const timeout = exp - Date.now();
    if (timeout <= 0) {
      this.authService.logout();
    } else {
      setTimeout(() => this.authService.logout(), timeout);
    }
  }
}