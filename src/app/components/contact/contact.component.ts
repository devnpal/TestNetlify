import { EventEmitter, Output } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input()
  myFather: string[];

  //@ViewChild(nameTest) nameTest;
  @ViewChild('nameTest', { static: true }) nameViewChild: ContactComponent;


  myFatherOne: string;

  childData = "this is child data";


  postsx: POSTS[];
  posts: POSTS[];

  counts: number[];;
  page: number;
  currentPage: number;

  //fizzbuzzquetions


  constructor(private apiService: ApiService) {
   
  }

  addme() {
    return 5;
  }

  ngOnInit(): void {

    //this.apiService.getApiData().subscribe((res) => {
    //  this.posts = res;

    //})

    this.fetchData(1);

    this.fizzbuzzQuestions();

  }

  fizzbuzzQuestions() {
    for (var i = 1; i < 100; i++) {

      let output = '';

      //if ((i % 3) == 0 && (i % 5) == 0) {
      //  console.log('Fizzbuzz');
      //}


      //else if ((i % 3) == 0) {
      //  console.log('Fizz');
      //}

      //else if ((i % 5) == 0) {
      //  console.log('Buzz');
      //}
      //else {
      //  console.log(i)
      //}

      if (i % 3 == 0) {
        output = "Fizz";
      }
      if (i % 5 == 0) {
        output += 'Buzz'
      }

      if (i % 4 == 0) {
        output += 'Buzzhhh'
      }
      else {
        output = i.toString();
      }

      console.log(output);
      

    }
  }


  fetchData(page: number) {
    
    this.apiService.getApiData().subscribe((res) => {
      if (page == undefined) {
        page = 1;
      }
      this.currentPage = page;
      this.postsx = res;
      let countsx  = Math.ceil((this.postsx.length) / 10);
      this.counts = Array(countsx).fill(1).map((x, i) => i+x);
      const start = (page-1) * 10;
      const end = start + 10;
      this.posts = this.postsx.slice(start, end);

    })
  }
  getPrev() {
    const start = (this.currentPage - 2) * 10;
    const end = start + 10;
    this.posts = this.postsx.slice(start, end);
    this.currentPage -= 1;
  }
  getNext() {
    const start = (this.currentPage) * 10;
    const end = start + 10;
    this.posts = this.postsx.slice(start, end);
    this.currentPage += 1;
  }

  findName() {
    this.myFatherOne = this.myFather[0]; // child component takes data, process it and display the corresponding output.
  }

  @Output() myAction: EventEmitter<string> = new EventEmitter();
  sendValToParent() {
    //this.myFather.push('xxx');
    this.myAction.emit('xxxx' + (Math.random()*100));
  }

}

interface POSTS {
  id: string,
  title: string,
  body:string
}
