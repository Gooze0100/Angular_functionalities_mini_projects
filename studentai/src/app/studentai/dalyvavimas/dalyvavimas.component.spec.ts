import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DalyvavimasComponent } from './dalyvavimas.component';

describe('DalyvavimasComponent', () => {
  let component: DalyvavimasComponent;
  let fixture: ComponentFixture<DalyvavimasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DalyvavimasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DalyvavimasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
