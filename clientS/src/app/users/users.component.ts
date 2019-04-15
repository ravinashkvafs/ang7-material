import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userSearch:any;
  userList: any = [
    { pic: '', name: 'Avinash Sharma', designation: 'Software Engineer', company: '@V5', gender: 'male' },
    { pic: '', name: 'Amit Dhiman', designation: 'Software Engineer', company: '@V5', gender: 'male' },
    { pic: '', name: 'Rohit Sharma', designation: 'Software Engineer', company: '@V5', gender: 'male' },
    { pic: '', name: 'Ayush Pratap', designation: 'Software Engineer', company: '@V5', gender: 'male' },
    { pic: '', name: 'Lavanya Reddy', designation: 'Software Engineer', company: '@V5', gender: 'female' },
    { pic: '', name: 'Aftab Khan', designation: 'Software Engineer', company: '@V5', gender: 'male' },
    { pic: '', name: 'Mayank Jain', designation: 'Software Engineer', company: '@V5', gender: 'male' }
  ];
}
