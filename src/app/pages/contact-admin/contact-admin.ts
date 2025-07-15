import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact';

@Component({
  selector: 'app-contact-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-admin.html',
  styleUrls: ['./contact-admin.css']
})
export class ContactAdminComponent implements OnInit {
  submissions: any[] = [];
  total = 0;
  page = 1;
  pageSize = 10;
  search = '';
  loading = true;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.loadSubmissions();
  }

  loadSubmissions() {
    this.loading = true;
    this.contactService.getSubmissions(this.search, this.page, this.pageSize).subscribe({
      next: (res) => {
        this.submissions = res.data;
        this.total = res.total;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }
  onSearch() {
    this.page = 1; // Reset to first page on search
    this.loadSubmissions();
  }
  nextPage() {
    if ((this.page * this.pageSize) < this.total) {
      this.page++;
      this.loadSubmissions();
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.loadSubmissions();
    }
  }
  get totalPages(): number {
    return Math.ceil(this.total / this.pageSize);
  }

  changePageSize(size: number) {
    this.pageSize = size;
    this.page = 1;
    this.loadSubmissions();
  }
  exportToCsv() {
    const rows = this.submissions;
    if (!rows.length) return;

    const header = Object.keys(rows[0]).join(',');
    const csv = [
      header,
      ...rows.map(row =>
        Object.values(row)
          .map(v => `"${(v ?? '').toString().replace(/"/g, '""')}"`)
          .join(',')
      )
    ].join('\r\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'contacts.csv';
    a.click();
  }
}
