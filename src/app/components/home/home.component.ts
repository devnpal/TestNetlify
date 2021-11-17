import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'testnetlifyOne';
  wife: any = '';
  count: number = 0;
  message: string = '';
  isJennifer: boolean = false;
  lastName: string = '';
  surName: string = '';

  inputVal: boolean = false;

  constructor() { }

  ngOnInit(): void { }



  mywife() {
    this.count += 1;
    /* do {*/
    switch (this.count) {
      case 1:
        this.inputVal = true;
        this.wife = 'ARCHANA';
        this.isJennifer = false;
        break;
      case 2:
        this.inputVal = true;
        this.wife = 'ARCHANA ';
        this.lastName = 'KHATIWADA';
        this.isJennifer = false;
        break;
      case 3:
        this.inputVal = true;
        this.wife = 'ARCHANA ';
        this.lastName = 'KHATIWADA';
        this.surName = 'NEPAL';
        this.isJennifer = false;
        break;
      case 4:
        this.inputVal = true;
        this.wife = '';
        this.lastName = '';
        this.surName = '';
        this.message = 'What are you expecting ??'
        this.isJennifer = false;
        break;
      case 5:
        this.inputVal = true;
        this.message = ''
        this.wife = 'Jennifer Lawrence ??';
        this.isJennifer = true;
        break;
      default:
        this.inputVal = true;
        this.wife = "NO...!!! MY Dear ARCHU.";
        this.isJennifer = false;
        this.count = 0;
        break;
    }
    /*} while (this.inputVal)*/

  }

}

