import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlausimaiComponent } from './klausimai.component';

describe('KlausimaiComponent', () => {
  let component: KlausimaiComponent;
  let fixture: ComponentFixture<KlausimaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlausimaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlausimaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
