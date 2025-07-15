import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrls: ['./contact-form.css']
})
export class ContactFormComponent {
  contactForm: FormGroup;
  successMessage = '';
  errorMessage = '';


  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['']
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
     if (this.contactForm.invalid) return;

    this.contactService.submitForm(this.contactForm.value).subscribe({
      next: (res) => {
        this.successMessage = res.message;
        this.errorMessage = '';
        this.contactForm.reset();
      },
      error: (err) => {
        this.errorMessage = 'Error submitting form';
        this.successMessage = '';
      }
    });
  }
}
