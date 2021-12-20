import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleapiComponent } from './googleapi.component';

describe('GoogleapiComponent', () => {
  let component: GoogleapiComponent;
  let fixture: ComponentFixture<GoogleapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
