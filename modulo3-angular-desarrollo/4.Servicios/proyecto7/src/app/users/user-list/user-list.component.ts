import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users:IUser[] =[];
  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
   this.userService.findAll().subscribe
   (data=>console.log(data));
   
  }
}
