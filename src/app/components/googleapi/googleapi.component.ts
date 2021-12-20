import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/employee';

import { GoogleService } from '../../services/google.service';

@Component({
  selector: 'app-googleapi',
  templateUrl: './googleapi.component.html',
  styleUrls: ['./googleapi.component.css']
})
export class GoogleapiComponent implements OnInit {

  errorMessage: string;

  employeee: Employee = {
    "name": "xxx",
    "age": "12",
    "id": 145,
    "salary": "62000"
  };

  post = {
    "userId": 1,
    "id": 112548,
    "title": "you are my Jaan",
    "body": "body is open"
  };
  

  constructor(private googleService: GoogleService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.googleService.getAllUser().subscribe((data) => {

      console.log('all users' + data);
    }, (error) => {

      if (error) {
        this.errorMessage = error;
      }
      console.log('error message '+error.message);
    }, () => {
      console.log('Operation is completed');
    })

  }

  createEmployee() {

    //this.employeee.name = "Dev Sagar";
    //this.employeee.age = "28";
    //this.employeee.salary = "61000";
    //this.employeee.id = 123

    let stringPost = JSON.stringify(this.post);
    let stringEmployee = JSON.stringify(this.employeee);

    //this.googleService.createUser(stringEmployee).subscribe((res) => {
    //  console.log(res);
    //})
    this.googleService.createPosts(stringPost).subscribe((res) => {
      console.log(res);
    })

  }

}
