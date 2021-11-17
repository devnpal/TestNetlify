import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testnetlifyOne';
  wife: any = '';
  count: number = 0;
  message: string = '';
  isJennifer: boolean = false;
  lastName: string = '';
  surName: string = '';

  mywife() {
    this.count += 1;

    switch (this.count) {
      case 1:
        this.wife = 'ARCHANA';
        this.isJennifer = false;
        break;
      case 2:
        this.wife = 'ARCHANA ';
        this.lastName = 'KHATIWADA';
        this.isJennifer = false;
        break;
      case 3:
        this.wife = 'ARCHANA ';
        this.lastName = 'KHATIWADA';
        this.surName = 'NEPAL';
        this.isJennifer = false;
        break;
      case 4:
        this.wife = '';
        this.lastName = '';
        this.surName = '';
        this.message = 'What are you expecting ??'
        this.isJennifer = false;
        break;
      case 5:
        this.message = ''
        this.wife = 'Jennifer Lawrence ??';
        this.isJennifer = true;
        break;
      default:
        this.wife = "NO...!!! MY Dear ARCHU.";
        this.isJennifer = false;
        break;
    }

  }
}
