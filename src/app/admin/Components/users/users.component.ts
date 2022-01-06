import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Iuser } from '../../Model/IUser.model';
import { ManagerService } from '../../services/manager.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements AfterViewInit {

  displayedColumns: string[] = ['email', 'emailConfirmed', 'id', 'phoneNumber','userName'];
  usersList: MatTableDataSource<Iuser>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private usersService: ManagerService) {
    this.loadTokens();
  }
  
  ngAfterViewInit() {
    this.usersList.paginator = this.paginator;
    this.usersList.sort = this.sort;
  }
  
  loadTokens() {
    let users: Iuser[] = [];
    this.usersService.getUsers().subscribe((data: any) => {
      console.log("Data: ",data);
      users = data.data;
      this.usersList = new MatTableDataSource(users);
    });
    console.log("users : ",users);
  }
}
