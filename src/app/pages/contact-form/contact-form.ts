import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrls: ['./contact-form.css']
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
      alert('Thank you! We received your message.');
      this.contactForm.reset();
    }
  }
}
