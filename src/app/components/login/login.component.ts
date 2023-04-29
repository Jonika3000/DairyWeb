import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[] = [];
  constructor(private usersservise: UsersService) { }
  ngOnInit(): void {
    this.usersservise.getAllUsers().subscribe(res => this.users = res);
  }
}
