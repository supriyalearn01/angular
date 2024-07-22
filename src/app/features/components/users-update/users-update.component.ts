import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-update',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './users-update.component.html',
  styleUrl: './users-update.component.css'
})
export class UsersUpdateComponent {
  userForm: FormGroup; // Step 1: Define Variable to Form 

  constructor(private fb: FormBuilder, private _usersService: UsersService) {

    this.userForm = this.fb.group(
      
      {
      id: ['', [Validators.required]],
      country: ['', [Validators.required]]
    }

  );

  }


  onSubmit(): void {
    if (this.userForm.valid) {

      console.log('Form Submitted', this.userForm.value);
      this._usersService.updateUser({
        "id": this.userForm.value.id,
        "country": this.userForm.value.country
      }).subscribe();
      
    }
  }
}
