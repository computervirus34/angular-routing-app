import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from '../topbar/topbar';
import { SidebarComponent } from '../sidebar/sidebar';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, TopbarComponent, SidebarComponent, FooterComponent],
  template: `
    <div class="d-flex flex-column min-vh-100">
      <app-topbar (toggleSidebar)="toggleSidebar()"></app-topbar>
      <div class="d-flex flex-grow-1">
        <app-sidebar [collapsed]="sidebarCollapsed"></app-sidebar>
        <main class="flex-fill p-3">
          <router-outlet></router-outlet>
        </main>
      </div>
      <app-footer></app-footer>
    </div>
  `
})
export class AppLayoutComponent {
  sidebarCollapsed = false;
  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}
