import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-topbar',
  standalone: true,
  templateUrl: './topbar.html',
  imports: [CommonModule, RouterModule],
  styleUrls: ['./topbar.css']
})
export class TopbarComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  constructor(public auth: AuthService, private router: Router) {}

  logout() {
     this.auth.logout();
     this.router.navigate(['/login']);
  }
}