import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent {
  @Input() collapsed = false;

    constructor(public auth: AuthService) {}

  menuItems = [
    { name: 'Dashboard', icon: 'bi-house', link: '/dashboard', roles: ['BankAdmin', 'CompanyAdmin', 'SubUser'] },
    { name: 'Remittance', icon: 'bi-currency-exchange', link: '/remittance', roles: ['BankAdmin', 'CompanyAdmin', 'SubUser'] },
    { name: 'Support', icon: 'bi-chat-dots', link: '/support', roles: ['BankAdmin', 'CompanyAdmin', 'SubUser'] },
    { name: 'Contact', icon: 'bi-envelope', link: '/contact', roles: ['BankAdmin', 'CompanyAdmin', 'SubUser'] },
    { name: 'Admin', icon: 'bi-gear', link: '/admin', roles: ['BankAdmin'] },
    { name: 'Sub-User', icon: 'bi-person', link: '/sub-user', roles: ['CompanyAdmin', 'BankAdmin'] }
  ];

  canAccess(item: any): boolean {
    const role = this.auth.getUserRole();
    return item.roles.includes(role);
  }
}
