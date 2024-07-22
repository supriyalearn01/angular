import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-users-delete',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './users-delete.component.html',
  styleUrl: './users-delete.component.css'
})
export class UsersDeleteComponent {
  userForm : FormGroup
  

  constructor(private fb: FormBuilder,private _usersService: UsersService) {
  
    this.userForm = this.fb.group({
      
      id: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Form Submitted', this.userForm.value);
      this._usersService.deleteUser({
        "id":Number(this.userForm.value.id),
        "name": " ",
        "country": " "
      }).subscribe();
    }
  }

}
