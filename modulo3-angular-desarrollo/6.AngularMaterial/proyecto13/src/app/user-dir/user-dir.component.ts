import { IUser } from './../../../../../5.Enrutado/proyecto12/src/app/users/models/user.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-dir',
  templateUrl: './user-dir.component.html',
  styleUrls: ['./user-dir.component.scss']
})
export class UserDirComponent {
users: IUser[] =[
{
  fullName: "Juan Garcia",
  email: "usuario1@gmail.com",
  bio: "Lorem ipsum dolor asit amet ipsum",
  avatar: "https://ui-avatars.com/api/?name=Usuario1+Garcia"
},
{
  fullName: "Patricia Martinez",
  email: "usuario2@gmail.com",
  bio: "Lorem ipsum dolor asit amet ipsum",
  avatar: "https://ui-avatars.com/api/?name=Usuario1+Garcia"
},
{
  fullName: "Antonio Rataplan",
  email: "usuario3@gmail.com",
  bio: "Lorem ipsum dolor asit amet ipsum",
  avatar: "https://ui-avatars.com/api/?name=Usuario1+Garcia"
},
{
  fullName: "Natalia rivas",
  email: "usuario4@gmail.com",
  bio: "Lorem ipsum dolor asit amet ipsum",
  avatar: "https://ui-avatars.com/api/?name=Usuario1+Garcia"
},
{
  fullName: "Gabriela Sotano",
  email: "usuario5@gmail.com",
  bio: "Lorem ipsum dolor asit amet ipsum",
  avatar: "https://ui-avatars.com/api/?name=Usuario1+Garcia"
},
];
}
