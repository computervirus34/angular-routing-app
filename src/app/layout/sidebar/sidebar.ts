import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent {
  @Input() collapsed = false;

  menuItems = [
    { name: 'Dashboard', icon: 'bi-house', link: '/dashboard' },
    { name: 'Remittance', icon: 'bi-currency-exchange', link: '/remittance' },
    { name: 'Support', icon: 'bi-chat-dots', link: '/support' },
    { name: 'Contact', icon: 'bi-envelope', link: '/contact' },
    { name: 'Admin', icon: 'bi-gear', link: '/admin' },
    { name: 'Sub-User', icon: 'bi-person', link: '/subuser' }
  ];
}
