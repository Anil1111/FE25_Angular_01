import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4SmartphoneComponent } from './baitap4-smartphone.component';

describe('Baitap4SmartphoneComponent', () => {
  let component: Baitap4SmartphoneComponent;
  let fixture: ComponentFixture<Baitap4SmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4SmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4SmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
