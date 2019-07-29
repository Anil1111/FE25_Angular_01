import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4CarouselComponent } from './baitap4-carousel.component';

describe('Baitap4CarouselComponent', () => {
  let component: Baitap4CarouselComponent;
  let fixture: ComponentFixture<Baitap4CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4CarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
