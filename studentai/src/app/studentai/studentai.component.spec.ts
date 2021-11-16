import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentaiComponent } from './studentai.component';

describe('StudentaiComponent', () => {
  let component: StudentaiComponent;
  let fixture: ComponentFixture<StudentaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
