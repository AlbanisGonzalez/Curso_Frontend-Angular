import { Component } from '@angular/core';
import { IUser } from '../user-dir/user.model';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
displayedColumns:string[] = ['avatar','fullName', 'email','actions' ];
users:IUser[] =[
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
    avatar: "/assets/img/user-avatar1.png"
  },
  {
    fullName: "Gabriela Sotano",
    email: "usuario5@gmail.com",
    bio: "Lorem ipsum dolor asit amet ipsum",
    avatar: "/assets/img/user-avatar2.png"
  },
];
// constructor(private router: Router);
view(user: IUser): void{
  // this.router.navigate
  console.log(user);
}
}

