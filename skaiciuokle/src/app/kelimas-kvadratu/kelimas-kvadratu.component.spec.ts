import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelimasKvadratuComponent } from './kelimas-kvadratu.component';

describe('KelimasKvadratuComponent', () => {
  let component: KelimasKvadratuComponent;
  let fixture: ComponentFixture<KelimasKvadratuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KelimasKvadratuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KelimasKvadratuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
