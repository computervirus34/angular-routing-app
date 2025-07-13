import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  templateUrl: './topbar.html',
  styleUrls: ['./topbar.css']
})
export class TopbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

 // constructor(public auth: AuthService, private router: Router) {}

  logout() {
    // this.auth.logout();
    // this.router.navigate(['/login']);
  }
}