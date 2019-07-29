import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4LaptopComponent } from './baitap4-laptop.component';

describe('Baitap4LaptopComponent', () => {
  let component: Baitap4LaptopComponent;
  let fixture: ComponentFixture<Baitap4LaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4LaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4LaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
