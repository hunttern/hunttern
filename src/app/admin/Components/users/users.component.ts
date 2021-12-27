import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Observable } from 'rxjs';
import { Iuser } from '../../Model/IUser.model';
import { ManagerService } from '../../services/manager.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements AfterViewInit {

  displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  usersList: MatTableDataSource<Iuser> = new MatTableDataSource(this.loadTokens());

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private usersService: ManagerService) {}
  
  ngAfterViewInit() {
    this.usersList.paginator = this.paginator;
    this.usersList.sort = this.sort;
  }
  
  loadTokens() {
    let users: Iuser[] = [];
    this.usersService.getUsers().subscribe(data => users = data);
    return users;
  }
}
