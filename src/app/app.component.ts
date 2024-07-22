import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersComponent } from './features/components/users/users.component';
import { UsersUpdateComponent } from "./features/components/users-update/users-update.component";
import { UserCreateComponent } from './features/components/user-create/user-create.component';
import { UsersDeleteComponent } from './features/components/users-delete/users-delete.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersComponent, UsersUpdateComponent,UserCreateComponent,UsersDeleteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
