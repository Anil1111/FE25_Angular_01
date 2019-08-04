import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtrributeDirectiveComponent } from './atrribute-directive.component';

describe('AtrributeDirectiveComponent', () => {
  let component: AtrributeDirectiveComponent;
  let fixture: ComponentFixture<AtrributeDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtrributeDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtrributeDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
