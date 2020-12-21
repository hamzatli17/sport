import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMatchResultComponent } from './add-match-result.component';

describe('AddMatchResultComponent', () => {
  let component: AddMatchResultComponent;
  let fixture: ComponentFixture<AddMatchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMatchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMatchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
