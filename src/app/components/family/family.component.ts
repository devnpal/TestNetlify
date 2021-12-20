import {  Component,  ElementRef,  OnInit, ViewChild } from '@angular/core';
import { AsyncService } from '../../services/async.service';
import { ContactComponent } from '../contact/contact.component';
//import { ChangeDetectorRef, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  myDad: string[] = ['Chudamani', 'Sharada']; // as parent component....sends all data to child
  childData: string;

  //@ViewChild('child', { static: true }) xxxm: ContactComponent;
  @ViewChild('child', { static: true }) xxxm: ContactComponent;

  constructor(private asyncservice: AsyncService) { }
  ngOnInit(): void {
  }

  getChildData() {
    this.childData = this.xxxm.childData;
  }
  

  passsubval() {
    this.asyncservice.setSubData((Math.random())*100);
  }
  passbehavval() {
    this.asyncservice.setBehavSubData((Math.random()) * 100)
  }

  seerefval(val: HTMLInputElement) {
    console.log(val.value);
  }

  getAnotherDad(ev: string) {
    this.myDad.unshift(ev);
  }

  getClickEvent(event: Event) {
    console.log(event);
  }
}
