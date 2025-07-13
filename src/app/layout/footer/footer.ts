import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-dark text-white text-center py-2">
      &copy; {{ currentYear }} Partner Portal. All rights reserved.
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}