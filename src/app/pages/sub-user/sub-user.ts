import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SubUserService } from '../../services/sub-user';
import { AuthService } from '../../services/auth';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sub-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgbModule],
  templateUrl: './sub-user.html',
  styleUrls: ['./sub-user.css']
})

export class SubUserComponent implements OnInit {
  subUsers: any[] = [];
  userForm: FormGroup;
  loading = true;
  isCompanyAdmin = false;
  isBankAdmin = false;
  companies: any[] = [];

  constructor(
    private fb: FormBuilder,
    private subUserService: SubUserService,
    private authService: AuthService,
    private modalService: NgbModal
  ) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      companyId: ['']
    });
  }

  ngOnInit(): void {
    this.isCompanyAdmin = this.authService.isCompanyAdmin();
    this.isBankAdmin = this.authService.isBankAdmin();

    if (this.isCompanyAdmin || this.isBankAdmin) {
      this.fetchSubUsers();
    }

    if (this.isBankAdmin) {
      this.fetchCompanies();
    }
  }
  fetchCompanies() {
    this.subUserService.getCompanies().subscribe({
      next: (res) => {
        this.companies = res;
      },
      error: (err) => {
        console.error('Error fetching companies:', err);
      }
    });
  }
  fetchSubUsers() {
    this.subUserService.getSubUsers(this.authService.getCompanyCode()).subscribe({
      next: (res) => {
        console.log('Received data:', res); // Debug log
        this.subUsers = res;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching sub-users:', err);
        this.loading = false;
      }
    });
  }
  openModal(content: any) {
    this.modalService.open(content);
  }

  onSubmit(modalRef: any) {
    console.log(this.userForm.value);
    if (this.userForm.valid) {

      const rawData = this.userForm.value;

      const payload = {
        partnerId: parseInt(this.authService.getPartnerId()), // If company admin, get partnerId from token
        fullName: rawData.username,
        email: rawData.email,
        passwordHash: rawData.password,
        isAdmin: this.authService.isBankAdmin(),
        createdAt: new Date().toISOString()
      };

      this.subUserService.createSubUser(payload).subscribe(() => {
        this.userForm.reset();
        this.fetchSubUsers();
        modalRef.close();
      });
    }
    // onSubmit() {
    //   if (this.userForm.valid) {
    //     this.subUserService.createSubUser(this.userForm.value).subscribe(() => {
    //       this.userForm.reset();
    //       this.fetchSubUsers();
    //     });
    //   }
  }
}