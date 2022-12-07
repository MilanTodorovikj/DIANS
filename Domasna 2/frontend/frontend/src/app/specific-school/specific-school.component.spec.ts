import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificSchoolComponent } from './specific-school.component';

describe('SpecificSchoolComponent', () => {
  let component: SpecificSchoolComponent;
  let fixture: ComponentFixture<SpecificSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificSchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
