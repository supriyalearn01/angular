import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {
  userForm : FormGroup
  

  constructor(private fb: FormBuilder,private _usersService: UsersService) {
  
    this.userForm = this.fb.group({
      id :[''],
      name: ['', [Validators.required]],
      country: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Form Submitted', this.userForm.value);
      this._usersService.createUser({
        //"id": this.userForm.value.id,
        "name": this.userForm.value.name,
        "country": this.userForm.value.country
      }).subscribe();
    }
  }

}
