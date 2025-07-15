import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SubUserService } from '../../services/sub-user';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-sub-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sub-user.component.html',
  styleUrls: ['./sub-user.component.css']
})

export class SubUserComponent implements OnInit {
  subUsers: any[] = [];
  userForm: FormGroup;
  loading = true;
  isCompanyAdmin = false;

  constructor(
    private fb: FormBuilder,
    private subUserService: SubUserService,
    private authService: AuthService
  ) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.isCompanyAdmin = this.authService.isCompanyAdmin();
    if (this.isCompanyAdmin) {
      this.fetchSubUsers();
    }
  }

  fetchSubUsers() {
    this.subUserService.getSubUsers().subscribe(res => {
      this.subUsers = res;
      this.loading = false;
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.subUserService.createSubUser(this.userForm.value).subscribe(() => {
        this.userForm.reset();
        this.fetchSubUsers();
      });
    }
  }
}