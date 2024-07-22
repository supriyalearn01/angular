import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  usersData:any = [];

  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this._usersService.getAllUsers().subscribe(x=>{
      console.log(x,"Get All User API Results");
      this.usersData=x;
    });
  }

}
